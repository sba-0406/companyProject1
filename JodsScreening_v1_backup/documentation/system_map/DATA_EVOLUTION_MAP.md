# Data Evolution Map 🛡️

How a plain Job Description string transforms step by step into a candidate's final grade.

---

## Stage 1 → 2: Raw Text → AI Analysis

```
HR Input (plain text in a textarea)
"We are hiring a Senior React Developer with 5+ years..."
                │
                ▼
        jdParserService.analyzeJobDescription(text)
                │
                ▼
{
  technicalSkills:  [ "React", "Redux", "Node.js", "System Design" ],
  softSkills:       [ "Leadership", "Conflict Resolution", "Stakeholder Management" ],
  seniorityLevel:   "Senior",
  roleCategory:     "Engineering",
  technicalWeight:  0.7,
  softSkillWeight:  0.3,
  minTechnicalScore: 70,
  minSoftSkillScore: 60
}
```

---

## Stage 2 → 3: Analysis → Assessment Template (Stored in DB)

```
Assessment.create({
  job:                <JobId>,
  technicalSkills:    [ "React", "Redux", ... ],
  softSkills:         [ "Leadership", ... ],
  technicalWeight:    0.7,
  softSkillWeight:    0.3,

  technicalQuestions: [               ← ObjectId refs to Question collection
    { questionId: ObjectId, skill: "React", difficulty: "Hard", isManual: false },
    ...
  ],

  scenarioTemplates: [                ← Fully embedded objects (not refs)
    {
      softSkill:   "Leadership",
      theme:       "Budget Crisis",
      stakeholder: "CEO",
      prompt:      "Your team is 3 weeks behind...",
      metrics:     [ "Trust", "Velocity", "Morale" ]
    }
  ],

  simulationConfig: {
    metrics:        [ "Trust", "Velocity", "Morale" ],
    metricPolarity: { Trust: "high", Velocity: "high", Morale: "high" }
  },

  status: "pending_review"  OR  "active"
})
```

---

## Stage 3 → 4: Template → Live Session (Created per-candidate, mutable)

```
ChatSession.create({
  user:             <CandidateId>,
  application:      <ApplicationId>,
  assessmentPhase:  "MCQ",
  currentMCQIndex:  0,

  worldState: Map {            ← MUTABLE: changes on every scenario response
    "Trust"    → 50,
    "Velocity" → 50,
    "Morale"   → 50
  },

  mcqAnswers: [],              ← grows as candidate answers questions
  skillScores: Map {},         ← accumulates skill points from correct answers

  scenarioProgress: {
    currentScenario: 1,
    totalScenarios:  3,
    scenarios: [
      { scenarioNumber: 1, status: "in-progress", startedAt: Date, moodLevel: 30 },
      { scenarioNumber: 2, status: "pending" },
      { scenarioNumber: 3, status: "pending" }
    ]
  },

  messages: [],                ← grows as chat exchanges happen
  status: "active"
})
```

---

## Stage 4 → 5: Live Session → Score Object (Computed, not stored separately)

```js
// In finalizeAssessment():

const techScore  = (correctMCQs / totalMCQs) * 100;          // e.g. 8/10 = 80

const softScore  = average(worldState metric health values);   // e.g. avg(Trust=65, Velocity=40, Morale=58) = 54.3

const weighted   = (techScore * 0.7) + (softScore * 0.3);     // (80*0.7) + (54.3*0.3) = 56 + 16.3 = 72.3

const overallFit = weighted >= 85 ? "High Potential"
                 : weighted >= 70 ? "Strong Match"
                 : weighted >= 55 ? "Potential Fit"
                 : "Developing";                               // → "Strong Match"
```

---

## Stage 5 → 6: Score → Final Record (Stored in Application)

```
Application.assessmentResults = {
  technicalScore:     80,
  softSkillScore:     54.3,
  weightedScore:      72.3,
  overallFit:         "Strong Match",
  skillBreakdown: Map {
    "React":    90,
    "Node.js":  75,
    "Redux":    80
  },
  softSkillBreakdown: Map {
    "Leadership":           65,
    "Conflict Resolution":  43
  },
  completedAt: Date
}
```

**This is permanent** — the Application document is the immutable "Evidence" of the candidate's performance.

---

## Data Shape Summary

| Stage | Object | Mutable? | Stored? |
| :--- | :--- | :--- | :--- |
| Raw JD text | `String` | N/A | `Job.description` |
| AI Analysis | Plain object | No | Not stored |
| Assessment Template | `Assessment` doc | Only by HR | MongoDB |
| Live Session | `ChatSession` doc | Yes (every turn) | MongoDB |
| Score calc | Computed values | No | Not stored separately |
| Final Result | `Application.assessmentResults` | No | MongoDB (permanent) |
