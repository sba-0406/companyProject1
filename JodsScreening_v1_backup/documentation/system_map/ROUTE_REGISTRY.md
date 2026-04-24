# Route Registry - ScenarioSim 🛡️✨

This registry tracks every Express endpoint discovered in the system, mapping them to their security policies and controller logic.

## 🔐 Auth Routes (`/api/auth`)
| Method | Endpoint | Middleware | Controller Function | Description |
| :--- | :--- | :--- | :--- | :--- |
| POST | `/register` | - | `register` | Create a new user account. |
| POST | `/login` | - | `login` | Authenticate and receive JWT. |
| GET | `/logout` | - | `logout` | Clear user session. |
| GET | `/me` | `protect` | `getMe` | Fetch current logged-in user profile. |

## 💼 Job & Assessment Mgmt (`/api/jobs`)
*All routes in this group require `protect` and `authorizeHR`.*

| Method | Endpoint | Controller Function | Description |
| :--- | :--- | :--- | :--- |
| GET | `/dashboard` | `renderHRDashboard` | View HR management overview. |
| GET | `/create` | `renderCreateJob` | View job creation form. |
| GET | `/:id/view` | `renderJobDetail` | View full details of a specific job. |
| POST | `/` | `createJob` | Persist a new job. |
| GET | `/` | `getJobs` | List all jobs created by the user. |
| GET | `/:id` | `getJobById` | Fetch raw job data. |
| POST | `/:id/generate-assessment`| `generateAssessment` | Trigger AI generation of MCQs/Scenarios. |
| POST | `/:id/regenerate-scenarios`| `regenerateScenarios` | AI-driven refresh of all scenarios. |
| POST | `/:id/scenario/:sId/regenerate`| `regenerateSingleScenario`| Granular AI refresh of one scenario. |
| DELETE| `/:id/scenario/:sId` | `deleteScenario` | Remove a single scenario template. |

## 📝 Candidate Applications (`/api/applications`)
| Method | Endpoint | Middleware | Controller Function | Description |
| :--- | :--- | :--- | :--- | :--- |
| GET | `/jobs` | `loadUser` | `getPublicJobs` | List open positions for browsing. |
| GET | `/jobs-portal` | `loadUser` | `renderJobsPortal` | View the public landing page. |
| POST | `/apply/:jobId` | `protect`, `upload` | `submitApplication` | Upload resume and apply to a job. |
| GET | `/my-dashboard` | `protect` | `renderCandidateDashboard`| View status of personal applications. |
| PATCH | `/application/:id/status`| `protect`, `authHR`| `updateApplicationStatus`| Change status (Shortlist, Hire, etc.). |

## ⚔️ Assessment Engine (`/api/assessment`)
*All routes in this group require `protect`.*

| Method | Endpoint | Controller Function | Description |
| :--- | :--- | :--- | :--- |
| GET | `/assessment/:appId` | `startAssessment` | Initialize or resume a test session. |
| GET | `/session/:id` | `getAssessmentSession` | Fetch current state (Phase, Time, Scenarios). |
| POST | `/submit-mcq` | `submitMCQAnswer` | Validate and store a technical answer. |
| POST | `/respond` | `respondToScenario` | Send message to AI stakeholder and get feedback. |
| POST | `/finalize` | `finalizeAssessment` | Calculate final grade and close session. |

## 👑 Admin Control (`/api/admin`)
*All routes in this group require `protect` and `authorizeAdmin`.*

| Method | Endpoint | Controller Function | Description |
| :--- | :--- | :--- | :--- |
| GET | `/dashboard` | `renderAdminDashboard` | View system-wide HR account management. |
| POST | `/hr` | `createHR` | Manually provision a new HR account. |
| DELETE| `/hr/:id` | `deleteHR` | Deactivate an HR account. |

---
🛡️ *Endpoint map version 1.0. Generated via Master Architect protocol.* 🛡️
