# Directory Index - ScenarioSim 🛡️✨

This document provides a comprehensive inventory of all architectural components discovered in the ScenarioSim codebase.

## 🟢 Backend Components

### 🛰️ Routers (`backend/routes/`)
- `adminRoutes.js`: Admin-level controls and user management.
- `authRoutes.js`: Authentication, registration, and session logic.
- `applicationRoutes.js`: Candidate application lifecycle.
- `assessmentRoutes.js`: Technical MCQ and Scenario simulation engine.
- `jobRoutes.js`: Job creation and assessment template management.

### 🎮 Controllers (`backend/controllers/`)
- `adminController.js`: Logic for HR management and system oversight.
- `applicationController.js`: Candidate dashboard and job application handling.
- `assessmentController.js`: Orchestrates the transition between MCQs and Situational phases.
- `authController.js`: JWT generation and user credential validation.
- `jobController.js`: Handles JD parsing and assessment generation.

### ⚙️ Services (`backend/services/`)
- `aiService.js`: The "AI Judge" for behavior analysis and delta calculation.
- `chatService.js`: Manages the state and continuity of simulation conversations.
- `jdParserService.js`: Llama 3.3 integration for skill extraction.
- `assessmentGeneratorService.js`: Orchestrates the building of assessment objects.
- `questionBankService.js`: Logic for selecting technical MCQs.

### 📦 Mongoose Models (`backend/models/`)
- `User.js`: Schema for Admin, HR, and Candidate accounts.
- `Job.js`: Position requirements and metadata.
- `Application.js`: Connects Users to Jobs and tracks assessment state.
- `Assessment.js`: The template for questions and scenario definitions.
- `ChatSession.js`: Real-time state of a candidate's simulation (metrics, messages).
- `Question.js`: Bank of technical MCQs.

### 🛡️ Middleware (`backend/middleware/`)
- `authMiddleware.js`: JWT verification and RBAC (Role-Based Access Control).

### 🛠️ Config (`backend/config/`)
- `db.js`: MongoDB connection strings and logic.
- `roleCompetencies.js`: Reference data for role-specific skill mapping.
- `simulationConfig.js`: Global parameters for the simulation engine.

---

## 🎨 Frontend Components

### 🖼️ EJS Views (`frontend/views/`)
- **Core Engine**: `dojo-assessment.ejs` (The Multi-Phase Engine).
- **Dashboards**: `candidate-dashboard.ejs`, `hr-dashboard.ejs`, `admin-dashboard.ejs`.
- **Detail Views**: `job-detail.ejs`, `application-detail.ejs`.
- **Portals**: `jobs-portal.ejs`, `job-detail-public.ejs`.
- **Forms**: `application-form.ejs`, `create-job.ejs`, `login.ejs`, `register.ejs`.
- **Partials**: `partials/_navbar.ejs`.

### 📜 JavaScript Assets (`frontend/public/js/`)
- `main.js`: Global frontend utilities.

### 💅 Style Sheets (`frontend/public/css/`)
- `style.css`: Unified Design System for the whole platform.

---
🛡️ *ScenarioSim Index generated automatically by Master Architect protocol.* 🛡️
