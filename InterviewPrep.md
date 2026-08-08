# 🎯 ScenarioSim — Complete Interview Preparation Guide

> **This document covers EVERY decision in the project so you can answer in-depth questions confidently.**

---

## 📌 1. Project Summary (Your Elevator Pitch)

> "ScenarioSim is an **AI-powered candidate screening platform** that replaces traditional hiring assessments with **dynamic, scenario-based simulations**. It uses **Llama 3 via Groq** to auto-generate MCQ questions from job descriptions, build realistic workplace scenarios, and evaluate candidates on both **technical skills and soft skills** — all automated. HR teams get ranked candidate lists with AI-generated summaries, while candidates experience an immersive, chat-based simulation instead of boring forms."

### Key Stats to Mention:
- **Tech Stack**: Node.js, Express, MongoDB, EJS, Groq (Llama 3), AWS S3
- **Roles**: 3 user roles — Candidate, HR, Admin
- **Assessment**: 2-phase assessment — MCQ (technical) + Scenario Simulation (behavioral)
- **Deployment**: Vercel serverless via GitHub Actions CI/CD

---

## 🏗️ 2. Architecture Deep-Dive

### High-Level Architecture

```
Browser (EJS Frontend)
    ↕ HTTP/REST
Express.js Backend
    ├── Auth Middleware (JWT + Cookies)
    ├── Controllers (Business Logic)
    ├── Services (AI, Email, Resume, Notifications)
    ├── Models (Mongoose/MongoDB)
    └── External APIs
         ├── Groq Cloud (Llama 3 LLM)
         ├── AWS S3 (Resume Storage)
         └── Gmail SMTP (Emails)
```

### Why This Architecture?

| Decision | Reasoning |
|:---|:---|
| **Monolith over Microservices** | Solo developer, fast iteration, simpler deployment to Vercel |
| **EJS over React/Next.js** | Server-side rendering = faster initial load, simpler auth (cookies), no CORS issues, SEO-friendly |
| **MongoDB over SQL** | Schema-flexible — assessment configs, skill scores, and world-state metrics vary per job/role. Mongoose provides enough structure |
| **REST over GraphQL** | Simpler for CRUD-heavy app. No complex nested queries needed |

---

## 🧠 3. The AI Pipeline (Most Important!)

### 3.1 ResilientAIService — Why This Design?

**Q: "Why did you build a resilient AI service instead of just calling the API directly?"**

> "AI APIs are unreliable — rate limits, model outages, and latency spikes are common. I built a **3-tier fallback system**:
> 1. **Groq Cloud** (primary) with **model rotation** across 4 Llama models
> 2. **SmartMockAIService** (deterministic fallback) — returns rule-based responses
> 3. The system **never crashes** even if all AI APIs fail"

**Key Design Decisions:**

| Feature | Why |
|:---|:---|
| **Model Rotation** (`llama-3.3-70b → 3.1-8b → 3.2-11b → 3.2-3b`) | If one model hits rate limits, automatically tries the next. Larger models tried first for quality |
| **Request Throttling** (`2500ms interval`) | Groq free tier allows ~24 RPM. Throttle prevents 429 errors |
| **GovernanceMonitor** | Tracks success rates, latency, model usage for the Admin dashboard. Reports system health as Healthy/Degraded/Critical |
| **`extractJSON()` utility** | LLMs often wrap JSON in markdown code blocks or add comments. This function robustly strips all that out |
| **SmartMockAIService** | Not random — returns contextually appropriate mock data based on prompt keywords. Ensures the app is fully demo-able offline |

### 3.2 Generator-Critic Pattern (Two-Pass Validation)

**Q: "How do you ensure AI-generated questions are accurate?"**

> "I use a **Generator-Critic pattern** — two separate AI models with different responsibilities:"

```
Step 1 (Generator): Llama 3.3 70B generates questions
                         ↓
Step 2 (Critic):    Llama 3.1 8B reviews for accuracy
                         ↓
Step 3 (Filter):    Invalid questions are rejected
                         ↓
Step 4 (Gap Fill):  If we're short, regenerate only the missing ones
```

**Why two different models?**
- Using a **different model for the critic** avoids the "blind spot" problem — if the same model generated a wrong answer, it would also validate its own mistake.
- The smaller 8B model is faster and cheaper for validation.
- We generate **1.5x buffer** questions to account for rejections.

### 3.3 Bulk Generation Strategy

**Q: "Why bulk generate instead of one skill at a time?"**

> "For a job with 6 skills × 2 questions = 12 questions, sequential generation means **12+ API calls**. Bulk generation packs it into **2 calls** (1 generate + 1 critic), reducing latency from ~30s to ~8s and avoiding rate limit hits."

### 3.4 JD Parser Service

**Q: "How does the system know what to test a candidate on?"**

> "When HR posts a job, they paste the Job Description. The `jdParserService` sends it to Llama 3.3 with a structured prompt that extracts:"
> - **Role classification** (Engineering/Sales/etc., seniority, IC vs Manager)
> - **4 skill categories** (technical, soft, domain, business)
> - **Assessment weights** (e.g., IC = 70% tech / 30% soft; Manager = 40/60)
> - **Question counts and difficulty** (auto-calibrated to seniority level)

**Key decision:** Weights are **normalized to sum to 1.0** server-side, even if the AI returns imprecise values. This is a **defensive programming** choice.

### 3.5 Dynamic Scenario Generation

**Q: "How are workplace scenarios generated?"**

> "The `jdParserService.generateScenarioTemplates()` creates scenarios that are **specific to the job description**, not generic templates."

Key features:
- **Composite Scenarios**: If 5 soft skills but only 3 scenarios, each scenario tests 2+ skills
- **Simulation Physics**: Each scenario has 3 metrics (e.g., Trust, Morale, Risk) with **polarity** — "high is better" for Trust, "low is better" for Risk
- **Stakeholder roles** are contextual to the job title, not generic

---

## 📊 4. The Grading System

### 4.1 Two-Phase Assessment

```
Phase 1: MCQ (Technical)
  → Score = (correct / total) × 100

Phase 2: Scenario Simulation (Behavioral)  
  → AI Judge evaluates each response
  → Updates 3 world-state metrics
  → Final soft score = metric health average
```

### 4.2 Weighted Final Score

```javascript
weightedScore = (techScore × technicalWeight) + (softScore × softSkillWeight)
// Default: 70% tech + 30% soft (configurable per job)
```

### 4.3 Performance Multiplier (Scenario Grading)

**Q: "How do you score something subjective like soft skills?"**

> "Each scenario has 3 metrics with **polarity**. The AI evaluates each candidate response and returns metric deltas (-10 to +10). The final score uses a **health formula**:"

```javascript
// For 'high' polarity (e.g., Trust): health = value / 100
// For 'low' polarity (e.g., Risk):   health = (100 - value) / 100

performanceMultiplier = average(all health scores)
```

**Why polarity matters:** A candidate with `Risk: 85` looks like a high number, but since Risk has "low" polarity, this is actually a **bad score** (85% risk = unhealthy). The system correctly penalizes this.

### 4.4 Overall Fit Classification

```javascript
if (weightedScore >= 85) overallFit = 'High Potential';
else if (weightedScore >= 70) overallFit = 'Strong Fit';
else if (weightedScore >= 50) overallFit = 'Moderate Fit';
else overallFit = 'Low Fit';
```

### 4.5 Candidate Ranking Formula

```javascript
rankingWeights: {
  assessmentWeight: 0.70,  // 70% — Simulation result (system-verified)
  skillMatchWeight: 0.20,  // 20% — AI Resume Parse match
  experienceWeight: 0.10   // 10% — Self-reported years
}
```

**Q: "Why is experience only 10%?"**

> "Experience is **self-reported** and unverifiable. Assessment scores are **system-generated and objective**. Giving 70% weight to the assessment score means the ranking is meritocratic, not resume-padding-friendly."

---

## 🔐 5. Security Decisions

### 5.1 Authentication Flow

```
Register → bcrypt(password, salt=10) → Save to MongoDB
Login → Compare password → Generate JWT (30-day expiry) → Set HttpOnly Cookie
Each Request → loadUser middleware reads cookie → Attaches req.user
```

**Q: "Why JWT in cookies instead of localStorage?"**

> "**HttpOnly cookies** prevent XSS attacks — JavaScript can't access the token. localStorage tokens are vulnerable to script injection. Cookies are automatically sent with every request, eliminating the need for manual Authorization headers."

### 5.2 Role-Based Access Control (RBAC)

```
3 roles: candidate, hr, admin

middleware chain: protect → authorize('hr', 'admin') → controller

loadUser (soft): Non-blocking. Loads user if token exists, continues as guest if not.
protect (hard): Blocks unauthenticated users completely.
authorize: Checks role against allowed list.
```

**Q: "Why have both `loadUser` and `protect`?"**

> "`loadUser` is a **soft middleware** used globally — it populates `req.user` for EJS templates (showing 'Login' vs 'My Dashboard' in navbar) but doesn't block. `protect` is a **hard gate** for private API routes. This separation means public pages still work while private routes are secured."

### 5.3 S3 Resume Proxy

**Q: "Why proxy S3 files instead of giving direct URLs?"**

> "Direct S3 URLs would expose our bucket structure and bypass access control. Instead, resumes are accessed via `/api/resumes/view/:applicationId` — the backend verifies authentication, fetches the file from S3, and **streams it** to the browser. Zero public S3 links are ever exposed."

```
Browser → GET /api/resumes/view/:id
         → Auth Middleware (verify JWT)
         → Controller fetches Application
         → Backend calls S3 (private)
         → Pipes S3 response stream to browser
```

**Why streaming?** Instead of downloading the entire file to server memory then sending, we **pipe the S3 response directly** to the HTTP response. This is memory-efficient and handles large files.

---

## 💾 6. Database Design Decisions

### 6.1 Schema Overview (10 Models)

| Model | Purpose | Key Decision |
|:---|:---|:---|
| **User** | Auth + profiles | `password: { select: false }` — never returned in queries unless explicitly requested |
| **Job** | Job postings | `assessmentConfig` embedded — keeps it atomic with the job |
| **Application** | Candidate applications | Compound unique index on `(job, candidate)` — prevents duplicate applications |
| **Assessment** | Assessment configuration | `suggestedQuestions` array for HR review staging area |
| **ChatSession** | Simulation state | `worldState` as Mongoose Map — dynamic metric keys per scenario |
| **Question** | MCQ question bank | `isVerified` flag for the Generator-Critic pipeline |
| **Notification** | In-app notifications | Template-based system with placeholders |
| **AuditLog** | Security audit trail | Records every state-changing action |
| **SkillTaxonomy** | Skill classification cache | **Smart Cache** — AI classifies once, stored forever |
| **NotificationTemplate** | Email/notification templates | Decouples content from code |

### 6.2 Key Schema Decisions

**Q: "Why embed `assessmentConfig` in Job instead of a separate collection?"**

> "Assessment config is **always accessed with the job** and has a 1:1 relationship. Embedding avoids an extra database query (join). If it were many-to-many, I'd use a reference."

**Q: "Why use Mongoose Map for `worldState` and `skillScores`?"**

> "The metrics and skills are **dynamic** — different jobs test different skills. A Map allows arbitrary key-value pairs without a rigid schema. `worldState: Map<String, Number>` stores any metric name with its value."

**Q: "Why the compound unique index on Application `(job, candidate)`?"**

> "A candidate must not apply to the same job twice. Instead of checking in application code (which has race conditions), the **database-level unique index** guarantees it atomically."

### 6.3 Virtual Fields

```javascript
// Application model
ApplicationSchema.virtual('resumeUrl').get(function () {
    return `/api/resumes/view/${this._id}`;
});
```

**Q: "Why use a virtual?"**

> "The actual `resume` field stores the raw S3 URL (private). The virtual `resumeUrl` generates a proxy URL dynamically. This means the frontend always gets the safe proxy URL, and if the proxy logic changes, I only update the virtual — not every template."

---

## 🔄 7. Assessment Flow (End-to-End)

### Step-by-Step:

```
1. HR creates Job → pastes Job Description
2. JD Parser (AI) → extracts skills, weights, seniority
3. Question Bank Service → sources MCQ questions
   - Priority: Verified Bank → Unverified Bank → Skill Mapping → AI Generation
4. Scenario Generator (AI) → creates 1-3 workplace scenarios
5. Assessment saved to DB (status: pending_review if AI questions exist)

6. HR reviews assessment → approves/rejects AI-suggested questions
7. HR invites candidate (status: invited)

8. Candidate starts assessment:
   Phase 1 (MCQ):
     → Questions served one at a time
     → Answers graded immediately (atomic MongoDB update)
     → Skill scores tracked per skill

   Phase 2 (Scenario Simulation):
     → 3 scenarios presented sequentially
     → Each scenario: 3 turns of conversation
     → AI Judge evaluates each response → returns metric deltas
     → World state updated after each turn
     → Messages cleared between scenarios, metrics carry over

9. Finalize:
   → Tech score calculated from MCQ results
   → Soft score calculated from metric health
   → Weighted score = tech × weight + soft × weight
   → Overall fit determined
   → HR notified (in-app + email)
   → Job analytics updated
```

### Key Decision: "Why 3 turns per scenario?"

> "It's a balance between **depth and fatigue**. 3 turns allow an opening statement, a push-back from the stakeholder, and a resolution attempt — enough to evaluate communication style. More turns would increase AI API costs and candidate fatigue."

### Key Decision: "Why do metrics carry over between scenarios?"

> "In real work, decisions have **cascading consequences**. If you destroyed trust in Scenario 1, you start Scenario 2 with that deficit. This tests **consistent performance**, not just one-off charm."

---

## ⚙️ 8. Question Bank Intelligence

### The "2X Strategy"

**Q: "Why source 2x the needed questions?"**

> "If a job needs 2 questions per skill, we source 4. The first 2 go into the active assessment, the extra 2 become **suggestions** — HR can swap them in. This gives HR control while keeping the process automated."

### Question Sourcing Priority

```
1. Verified questions from bank (isVerified: true)
2. Unverified active questions (isVerified: false, status: active)
3. Skill-mapped questions (e.g., "TypeScript" → "JavaScript")
4. AI-generated questions (if allowAIGeneration is true)
```

**Q: "Why have skill mappings?"**

> "If the question bank has JavaScript questions but not TypeScript, the mapping `TypeScript → JavaScript` provides relevant fallback questions. However, I removed `Angular → React` mapping because they're fundamentally different frameworks — bad mappings would unfairly test candidates."

### Smart Skill Taxonomy

```
1. Check static taxonomy (hardcoded common skills)
2. Check MongoDB SkillTaxonomy collection
3. If unknown: AI classifies once → saved to DB forever
```

**Q: "Why is this a 'Smart Cache'?"**

> "The first time we encounter a new skill like 'Terraform', the AI classifies it as 'Cloud-DevOps'. This is saved to the database. Every future encounter uses the cached result — **zero redundant AI calls**. It's essentially a self-building taxonomy."

---

## 📧 9. Notification System

### Dual-Channel Architecture

```
Notification Service
  ├── In-App (MongoDB Notification collection)
  └── Email (Gmail SMTP via Nodemailer)
```

### Template System

```javascript
// Template: "{{candidateName}} completed the assessment for {{jobTitle}} with score {{score}}%"
// Data:     { candidateName: "Alice", jobTitle: "SDE", score: 78 }
// Result:   "Alice completed the assessment for SDE with score 78%"
```

**Q: "Why templates instead of hardcoded strings?"**

> "Templates are stored in the database. HR/Admin can modify notification text **without code changes**. The `populateTemplate()` function replaces `{{placeholders}}` with actual data."

### Email Safety Filter

```javascript
if (!to.toLowerCase().endsWith('@gmail.com')) {
    return { success: true, mode: 'filtered' };
}
```

**Q: "Why filter non-Gmail?"**

> "During development, test accounts use fake emails like `test@xyz.com`. Sending to these causes SMTP bounce errors that look like bugs. The Gmail-only filter prevents this while allowing real demo emails to work."

---

## 🚀 10. Deployment & CI/CD

### Vercel Configuration

```json
{
  "builds": [
    { "src": "backend/server.js", "use": "@vercel/node" },
    { "src": "frontend/public/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(css|js|images)/(.*)", "dest": "/frontend/public/$1/$2" },
    { "src": "/(.*)", "dest": "backend/server.js" }
  ]
}
```

**Q: "Why Vercel for a Node.js server?"**

> "Vercel's `@vercel/node` adapter wraps Express apps as serverless functions. Static assets are served from the CDN edge. This gives us **zero-config scaling** and free hosting for demos. The catch-all route `/(.*) → server.js` ensures server-side rendering works."

### GitHub Actions CI/CD

> "Every push to `main` triggers the deploy workflow. No manual deployments — push code, it's live."

---

## 📋 11. Resume Processing Pipeline

```
1. Candidate uploads PDF → multer-s3 sends to private S3 bucket
2. Backend downloads from S3 → pdf-parse extracts text
3. AI extracts skills from text
4. Skill matching: compares extracted skills vs job requirements
   - Exact match (1.0 weight)
   - Similar match — same category (0.5 weight)
   - Missing (0 weight)
5. Score = (exact × 1.0 + similar × 0.5) / totalJobSkills × 100
6. Autofill: AI extracts name, email, phone, years of experience
```

**Q: "Why extract skills using AI instead of keyword matching?"**

> "I actually have **both**. AI extraction is primary because it understands context — `'5 years managing React projects'` extracts both `React` and `Project Management`. The keyword fallback (`_keywordFallback()`) activates if AI fails, checking against a hardcoded list of 30+ common skills."

---

## 🛡️ 12. Error Handling & Resilience

### Pattern: "Never Break the User Flow"

| Component | Failure Strategy |
|:---|:---|
| **AI Service** | 3-tier fallback: Groq → Model rotation → Mock |
| **Email Service** | Logs error, returns `{ success: false }` — doesn't throw |
| **Audit Logger** | Catches errors silently — audit failure must never block business logic |
| **Notification** | Wrapped in try/catch — assessment finalization succeeds even if notification fails |
| **Resume Parsing** | Returns empty string on failure — app continues with manual data entry |

**Q: "What happens if the AI is completely down during an assessment?"**

> "The `SmartMockAIService` kicks in. For behavioral evaluation, it returns `+5` delta for all metrics with generic feedback. It's not ideal, but the **assessment still completes** and the candidate isn't blocked. The Governance Monitor marks the system as 'Critical' so admins know."

---

## 📊 13. Admin System Monitor

### What It Tracks

```javascript
GovernanceMonitor = {
  totalCalls, successCalls, failCalls,
  retries, fallbackCount,
  totalLatency, avgLatency,
  modelUsage: { "llama-3.3-70b": 45, "llama-3.1-8b": 12 },
  successRate: 94.2,
  status: 'Healthy' | 'Degraded' | 'Critical'
}
```

**Why?** Enterprise clients need visibility into AI reliability. The Admin dashboard shows real-time health, helping debug issues like "questions are generic" (meaning Mock fallback is active).

---

## 🧪 14. Audit Logging

### What Gets Logged

| Event | Data Captured |
|:---|:---|
| Assessment Started | Session ID, User IP |
| Assessment Completed | Weighted Score, Overall Fit |
| Application Status Change | Previous state → New state |
| Job Created/Edited | Before/After snapshot |

**Q: "Why build audit logging?"**

> "Two reasons: (1) **Compliance** — hiring decisions must be auditable for fairness. (2) **Debugging** — if a candidate claims their score is wrong, we can trace every action chronologically."

The logger captures `performer`, `performerRole`, `ipAddress`, and `metadata` — enough for a full investigation.

---

## 🔑 15. Key Technical Decisions Summary

| Decision | Why Not the Alternative |
|:---|:---|
| **Groq (free) over OpenAI** | Zero cost for demos. Llama 3 quality is comparable for structured outputs |
| **EJS over React** | No build step, cookie-based auth, SSR out of the box |
| **MongoDB over PostgreSQL** | Dynamic schemas for metrics, skill scores, and scenario configs |
| **bcrypt over Argon2** | More battle-tested in Node.js ecosystem, simpler setup |
| **JWT over Sessions** | Stateless = works with serverless (Vercel). No session store needed |
| **Streaming S3 proxy over Pre-signed URLs** | Pre-signed URLs expose bucket/key structure and have time-limit complexity |
| **Atomic MongoDB updates over read-modify-write** | Prevents race conditions during rapid MCQ clicking |
| **Template-based notifications over hardcoded** | Content changes don't require code deployment |

---

## ❓ 16. Tricky Questions They Might Ask

### "What would you do differently?"

> "I'd add **WebSocket support** for real-time scenario simulation instead of polling. I'd also integrate **multi-LLM fallbacks** (Gemini, Claude) instead of just Groq. For production, I'd add **rate limiting per user** and **CSRF protection**."

### "How would you scale this?"

> "Three things: (1) **Redis cache** for question bank queries — same skills get requested repeatedly. (2) **Queue system (Bull/BullMQ)** for AI generation — don't block HTTP requests. (3) **Horizontal scaling** — the app is stateless (JWT), so multiple Vercel instances work out of the box."

### "What's the hardest bug you faced?"

> "**Mongoose Map serialization.** `worldState` is a Map in the schema, but when you do `Object.fromEntries()` on it after modification, sometimes Mongoose doesn't detect the change. I had to add `session.markModified('worldState')` before saving. Another hard one was skill names with dots (like `'Node.js'`) breaking Mongoose — I wrote `sanitizeSkill()` to replace dots with a Unicode fullwidth period."

### "Why not use a testing framework?"

> "For an assessment product, the 'test' IS the product. I focused on **resilience patterns** (fallbacks, error boundaries, atomic updates) over unit tests. For production, I'd add Jest tests for the scoring algorithms and integration tests for the assessment flow."

### "How do you prevent cheating?"

> "Several layers: (1) **Questions are served one at a time** — can't see future questions. (2) **Correct answers are never sent to the frontend** — grading happens server-side. (3) **Scenario responses are AI-evaluated** — no predefined correct answers to leak. (4) **Audit logging** tracks suspicious behavior patterns."

---

## 📂 17. File Structure Quick Reference

```
backend/
├── app.js              ← Express app setup, middleware, routes
├── server.js           ← Entry point (starts listening)
├── config/
│   └── db.js           ← MongoDB connection
├── controllers/        ← Business logic
│   ├── assessmentController.js  ← MCQ + Scenario flow
│   ├── applicationController.js ← Apply, rank, shortlist
│   ├── jobController.js         ← CRUD jobs, JD parsing
│   ├── authController.js        ← Register, Login, Logout
│   └── resumeController.js      ← S3 proxy streaming
├── middleware/
│   └── authMiddleware.js ← protect, authorize, loadUser
├── models/             ← Mongoose schemas (10 models)
├── routes/             ← Express routers
├── services/           ← Core business services
│   ├── aiService.js             ← ResilientAIService (3-tier)
│   ├── chatService.js           ← Scenario simulation engine
│   ├── jdParserService.js       ← JD analysis + scenario gen
│   ├── assessmentGeneratorService.js ← Orchestrator
│   ├── questionBankService.js   ← 2X sourcing strategy
│   ├── skillService.js          ← Taxonomy + matching
│   ├── resumeAssistant.js       ← PDF parse + skill extraction
│   ├── emailService.js          ← SMTP dispatch
│   └── notificationService.js   ← Dual-channel notifications
├── utils/
│   └── auditLogger.js  ← Compliance logging
└── scripts/            ← DB seeds and migrations

frontend/
├── public/
│   ├── css/style.css
│   └── js/main.js
└── views/              ← EJS templates (13 pages)
    ├── login.ejs, register.ejs
    ├── candidate-dashboard.ejs
    ├── hr-dashboard.ejs
    ├── admin-dashboard.ejs
    ├── dojo-assessment.ejs  ← The simulation UI
    ├── jobs-portal.ejs
    └── ...
```

---

## 🗣️ 18. How to Talk About the Project

### When asked "Tell me about your project":

1. **Start with the problem**: "Traditional hiring uses static MCQs and résumé keywords, which don't measure real-world competency."
2. **Your solution**: "I built ScenarioSim — it uses AI to parse job descriptions, generate contextual assessments, and evaluate candidates through interactive workplace simulations."
3. **Technical depth**: "The system has a 3-tier AI fallback architecture, a Generator-Critic pattern for question validation, and a polarity-based grading system for behavioral assessment."
4. **Impact**: "HR teams get ranked candidate lists with AI-generated summaries, reducing screening time while being more fair — the ranking is 70% assessment score, 20% skill match, only 10% self-reported experience."

### When defending a decision:

Always follow this pattern:
1. **State the decision** — "I chose X"
2. **State the alternative** — "instead of Y"  
3. **Give the reason** — "because Z"
4. **Acknowledge the tradeoff** — "The tradeoff is..."

---

> **Good luck with your interviews! 🚀 You've built a genuinely impressive project — own it confidently.**
