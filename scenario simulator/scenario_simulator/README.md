# Scenario-Based Role Simulation & Competency Insight Platform

> **Status**: Production-Ready Design | **Version**: 1.0.0

## 📌 Project Overview
The **Scenario-Based Role Simulation & Competency Insight Platform** is a career reflection tool designed to evaluate soft skills through realistic workplace scenarios. It utilizes a **rule-based evaluation engine** supported by **AI for summarization**, ensuring transparent, explainable, and consistent feedback without algorithmic bias.

This system is **NOT** a performance evaluation or hiring tool. It is a developmental aid for self-monitoring and competency growth.

---

## 🏗 Architecture
The project follows a robust **MVC (Model-View-Controller)** architecture built on the **MERN** stack (excluding React for this SSR implementation).

- **Backend**: Node.js & Express.js (REST API)
- **Database**: MongoDB (Mongoose ODM)
- **Frontend**: Server-Side Rendering (SSR) with EJS Templates
- **Auth**: JWT-based stateless authentication with Role-Based Access Control (RBAC)
- **AI Integration**: OpenAI API (coupled via Service Layer) for text summarization and feedback generation only.

### Key Components
- **`keywordMatcher`**: Core logic engine that maps user input tokens to predefined rubric keywords.
- **`aiService`**: Handles interaction with LLMs, strictly scoped to summarization.
- **`evaluationService`**: Orchestrates the flow between raw input, AI summarization, and keyword matching.

---

## 🔐 RBAC (Role-Based Access Control)
The system enforces strict access boundaries:

| Role | Permissions |
|------|-------------|
| **Employee** | Simulate scenarios, View own reports, Manage own profile. |
| **Manager** | View team reports (read-only), analytics. (Demo: Read-only access implemented) |
| **Admin** | Create/Edit Scenarios, Define Rubrics, Manage Users. |

**Default Credentials for Testing:**
- **Admin**: `admin@example.com` / `password123`
- **Employee**: Register a new user via the Login page.

---

## 🤖 AI Usage & Ethics Disclaimer
**Strict Operational Boundaries:**
1.  **AI does NOT assign scores.** Competency observations are determined solely by the presence of specific keywords in the rubric.
2.  **AI does NOT predict potential.** It only summarizes user intent and reinforces feedback clarity.
3.  **Transparency:** All AI-generated summaries are stored alongside raw inputs for auditability.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14+)
- **MongoDB**: You need a database connection. Since you don't have a local instance, use **MongoDB Atlas** (Free Cloud Tier).

### ☁️ MongoDB Atlas Setup (Free)
1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up/login.
2.  Create a free **M0 Cluster**.
3.  In "Database Access", create a database user (e.g., `admin` / `password123`).
4.  In "Network Access", allow access from anywhere (`0.0.0.0/0`).
5.  Click **Connect** -> **Drivers** -> Copy the connection string.
    - Format: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/scenario_platform?retryWrites=true&w=majority`
6.  Paste this string into your `.env` file for `MONGO_URI`.

### Installation
1.  **Clone/Unzip** the project.
2.  Navigate to the root directory:
    ```bash
    cd scenario-simulation-platform
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  **Configuration**:
    - Rename `.env.example` to `.env`.
    - Update `MONGO_URI` with your Atlas connection string.
    - Update `OPENAI_API_KEY` (optional, mock mode enabled by default).

### Database Seeding
Populate the database with the 4 core scenarios:
```bash
npm run seed
```

### Running the App
Start the server in development mode:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

---

## 🔄 Sample API Flows

### 1. Submit Simulation
**POST** `/api/simulation/submit`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "scenarioId": "651...",
    "responseText": "I would immediately pause the deployment..."
  }
  ```
- **Response**: Returns competency map and AI feedback.

### 2. Get Report
**GET** `/api/reports/me`
- **Response**: Aggregated stats and historical simulation data.

---

## 👨‍💻 Engineering Positioning
This project demonstrates **Senior Engineering** capabilities by focusing on:
- **Separation of Concerns**: Services, Controllers, and Utils are strictly decoupled.
- **Security**: HttpOnly cookies for JWT, RBAC middleware.
- **Maintainability**: Clear folder structure, modular code.
- **Ethical AI**: Constraint-based design preventing AI hallucination in critical evaluation paths.

---
**Created by Antigravity**
