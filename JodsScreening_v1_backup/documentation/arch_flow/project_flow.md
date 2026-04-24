# Project Flow - ScenarioSim 🛡️✨

ScenarioSim follows two distinct, yet interconnected, workflows: **The HR Journey** for creating assessments and **The Candidate Journey** for completing them.

## 1. The HR Journey: Assessing the Role

### Step 1: Job Creation
- HR enters a Job Title and translates their requirements into a **Job Description (JD)**.
- The system calls `jdParserService.analyzeJobDescription()` to extract skills, seniority, and weighting logic.

### Step 2: Assessment Generation
- Based on the JD analysis, the **Assessment Generator Service** orchestrates:
    - **Technical Sourcing**: Pulling pre-approved questions from the bank.
    - **Scenario Creation**: Generating exactly one creative situational scenario for each identified soft skill.
- The result is a persistent **Assessment Template** linked to the job.

### Step 3: Moderation
- HR reviews the generated content. They can:
    - **Regenerate** individual scenarios if they want a different "theme."
    - **Delete** scenarios that aren't relevant.
    - **Add Manual Content** to ensure the test is tailored to their specific company culture.

---

## 2. The Candidate Journey: The Simulation

### Step 1: The Application
- Candidates apply for the job via the portal.
- Their dashboard shows a **"Take Assessment"** action if the role requires it.

### Step 2: Starting the Test
- Clicking the button hits `/api/assessment/assessment/:id`.
- The system creates a live **ChatSession** which snapshots the current assessment template.

### Step 3: Phase 1 — Technical MCQs
- The candidate answers technical multiple-choice questions.
- Each answer is instantly validated and stored in the session record.

### Step 4: Phase 2 — Situational Simulation (The Dojo)
- The interface "morphs" into an AI-powered chat simulation.
- Candidates "talk" to stakeholders (represented by the LLM).
- **The AI Judge**: For every response, the AI evaluates the candidate's behavior, adjusts workplace **Metrics** (e.g., Trust, Risk), and provides realistic stakeholder feedback.

### Step 5: Finalization & Grading
- Once all scenarios are completed, the system calculates a **Final Grade (S/A/B/C/D/F)** based on:
    - **Technical Score**: MCQ accuracy.
    - **Performance Multiplier**: How well they managed workplace metrics during the simulation.
- The application status is updated to `assessment_completed`, and HR is notified.

---
🛡️ *ScenarioSim: Transforming Recruitment through Immersive Simulation.* 🛡️
