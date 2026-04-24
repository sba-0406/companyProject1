# Data Payload Recipes - ScenarioSim 🛡️✨

This document provides the "Raw Ingredients" for the system—the exact JSON structures sent and received during core interactions.

## 🟢 1. Candidate Assessment Flow

### **Request: Submit MCQ Answer**
`POST /api/assessment/submit-mcq`
```json
{
  "sessionId": "65e...abc",
  "questionId": "65e...xyz",
  "answerIndex": 2
}
```

### **Response: Current State**
`GET /api/assessment/session/:id`
```json
{
  "success": true,
  "data": {
    "phase": "MCQ",
    "currentIndex": 4,
    "totalQuestions": 10,
    "currentQuestion": {
      "question": "How do you handle a race condition in Node.js?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "skill": "Node.js"
    }
  }
}
```

### **Request: Respond to AI Stakeholder**
`POST /api/assessment/respond`
```json
{
  "message": "I will immediately inform the team and draft a mitigation plan."
}
```

### **Response: AI Evaluation & Feedback**
```json
{
  "success": true,
  "data": {
    "message": "That's a proactive approach, but the team is already under pressure. How do you plan to manage their morale?",
    "worldState": {
      "Trust": 65,
      "Velocity": 40,
      "Morale": 55
    },
    "isResolved": false
  }
}
```

---

## 🔵 2. HR Management Flow

### **Request: Generate Assessment from JD**
`POST /api/jobs/:id/generate-assessment`
```json
{
  "questionsPerSkill": 2,
  "allowAIGeneration": true
}
```

### **Response: Generated Template**
```json
{
  "success": true,
  "data": {
    "assessmentId": "65e...123",
    "analysis": {
      "seniority": "Senior",
      "technicalSkills": ["React", "System Design"],
      "softSkills": ["Conflict Resolution", "Leadership"]
    },
    "warnings": []
  }
}
```

---

## 🔒 3. Auth Response (The "Cookie" Token)

When you login, the server responds with this JSON, but the **Critical Token** is sent via a secure instruction to your browser (`Set-Cookie`).

```json
{
  "success": true,
  "token": "eyJhbGci... (The JWT)",
  "data": {
    "id": "65e...u1",
    "name": "Alex HR",
    "role": "hr"
  }
}
```

---

## 🖼️ 4. EJS Rendering Context (What Data a Page Gets)

When the server **renders** an HTML page (not just JSON), it passes a context object to the EJS template. Here's exactly what each key page receives:

### **`GET /jobs/:id` → `job-detail.ejs`**
```json
{
  "user":  { "_id": "...", "name": "Alex", "role": "hr" },
  "job":   {
    "title": "Senior Dev",
    "description": "Full JD text...",
    "assessmentId": {
      "status": "active",
      "technicalQuestions": [{ "questionId": {...}, "skill": "React" }],
      "scenarioTemplates": [{ "softSkill": "Leadership", "prompt": "..." }]
    }
  },
  "title": "Senior Dev"
}
```

### **`GET /assessment/assessment/:appId` → `dojo-assessment.ejs`**
```json
{
  "user":        { "_id": "...", "role": "candidate" },
  "application": { "_id": "...", "assessmentStatus": "in_progress" },
  "session": {
    "_id":            "...",
    "assessmentPhase": "MCQ",
    "currentMCQIndex": 0,
    "worldState":     {},
    "persona":        { "name": "Jordan", "role": "VP of Sales", "mood": "Concerned" }
  },
  "title": "Assessment"
}
```

### **`GET /jobs/:id/candidates` → `job-candidates.ejs`**
```json
{
  "user":       { "_id": "...", "role": "hr" },
  "job":        { "title": "Senior Dev" },
  "candidates": [
    {
      "_id":              "...",
      "candidateName":    "Jane Doe",
      "status":           "shortlisted",
      "assessmentStatus": "completed",
      "assessmentResults": {
        "technicalScore": 85,
        "softSkillScore": 72,
        "weightedScore":  80,
        "overallFit":     "Strong Match"
      }
    }
  ]
}
```

---
🛡️ *Technical documentation generated via Master Architect protocol.* 🛡️
