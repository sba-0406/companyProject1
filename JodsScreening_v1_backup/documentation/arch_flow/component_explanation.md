# Component Explanation - ScenarioSim 🛡️✨

This document provides a deep dive into the specific internal modules that power the ScenarioSim assessment engine.

## 1. Backend Core Services

### `jdParserService.js` (The Brain)
- **Primary Responsibility**: Deconstructing raw job descriptions.
- **AI Integration**: Uses Llama 3.3 to extract skills (Technical, Soft, Domain, Business), seniority levels (Junior, Mid, Senior, Lead), and recommended test durations.
- **Normalization**: Ensures technical weights across all skills sum to 1.0.

### `assessmentGeneratorService.js` (The Orchestration)
- **Primary Responsibility**: Building the complete assessment object.
- **Key Logic**: Controls the "one-to-one" mapping of soft skills to situation templates. It also manages **Regenerations**:
    - `regenerateSingleScenario`: Replaces only one scenario without touching others.
    - `regenerateTechnicalQuestions`: Refreshes the question list while preserving manual entries.

### `aiService.js` (The Judge)
- **Primary Responsibility**: Evaluating candidate behavior in real-time.
- **Mechanism**: For every message a candidate sends:
    1. It analyzes the **Sentiment** and **Approach** (e.g., Results-oriented vs. Relationship-oriented).
    2. It calculates **Deltas** for workplace metrics (e.g., +10 Trust, -5 Risk).
    3. It generates a **Persona-Matched Response** as the stakeholder.

---

## 2. Frontend Modules

### `dojo-assessment.ejs` (The Multi-Phase Engine)
- This is the single page where the entire test happens.
- **View Switching**: It uses a JavaScript-driven state machine to switch between:
    - **MCQ View**: Simple multiple-choice grid.
    - **Simulation View**: Immersive chat interface with real-time metric-tracking bars.
- **API Strategy**: Communicates exclusively with `/api/assessment/` routes via the Fetch API.

### `job-detail.ejs` (The HR Control Panel)
- **Granular Controls**: Allows HR to individually **Regenerate (🔄)** or **Delete (🗑️)** scenarios.
- **Moderation Interface**: Displays "Pending Review" badges for any AI-generated questions that require human oversight.

---

## 3. Key Data Models

| Model | Purpose |
| :--- | :--- |
| **`Assessment`** | Stores the static template of questions/scenarios. |
| **`ChatSession`** | Stores the dynamic state (messages, metrics) of an active candidate test. |
| **`Application`** | Connects a specific user to a specific job and tracks their assessment status (`pending`, `in_progress`, `completed`). |

---
🛡️ *ScenarioSim: Transforming Recruitment through Immersive Simulation.* 🛡️
