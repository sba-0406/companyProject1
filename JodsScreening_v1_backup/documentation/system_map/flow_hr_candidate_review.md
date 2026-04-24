# Feature Flow: HR Candidate Review 🛡️

## Viewing & Managing Candidates After Assessment

```mermaid
sequenceDiagram
    participant HR
    participant Server as Express Server
    participant DB as MongoDB

    HR->>Server: GET /api/jobs/:id/candidates?sort=score
    Server->>DB: Application.find({job}).sort({'assessmentResults.weightedScore': -1}).populate('job')
    DB-->>Server: Sorted candidates array
    Server-->>HR: Render job-candidates.ejs { candidates[], job, user }

    HR->>Server: GET /applications/:id
    Server->>DB: Application.findById(id)
    DB-->>Server: Full application with assessmentResults, skillBreakdown Map
    Server-->>HR: Render application-detail.ejs

    HR->>Server: PUT /api/applications/:id/status  { status: 'shortlisted' }
    Server->>DB: application.status = 'shortlisted'; application.shortlistedAt = now; save()
    DB-->>Server: Updated application
    Server-->>HR: { success: true }
```

---

## HR Action → Status Mapping

| HR Action | PUT body | Fields Updated |
| :--- | :--- | :--- |
| Shortlist | `{ status: 'shortlisted' }` | `status`, `shortlistedAt` |
| Reject | `{ status: 'rejected' }` | `status`, `rejectedAt` |
| Schedule Interview | `{ status: 'interview_scheduled', interviewDate: '...' }` | `status`, `interviewDate` |
| Hire | `{ status: 'hired' }` | `status` |

---

## Candidate Card Data (What HR Sees)

Each candidate card on the `job-candidates.ejs` page is populated from:
```json
{
  "candidateName":    "Jane Doe",
  "candidateEmail":   "jane@example.com",
  "status":           "shortlisted",
  "assessmentStatus": "completed",
  "assessmentResults": {
    "technicalScore": 85,
    "softSkillScore": 72,
    "weightedScore":  80.6,
    "overallFit":     "Strong Match",
    "skillBreakdown": { "React": 90, "Node.js": 80 },
    "completedAt":    "2024-02-28T10:00:00Z"
  }
}
```

---

## Sort Options

The `GET /api/jobs/:id/candidates?sort=score` endpoint supports:

| `sort` param | DB sort | Effect |
| :--- | :--- | :--- |
| `score` | `{ 'assessmentResults.weightedScore': -1 }` | Highest scores first |
| `name` | `{ candidateName: 1 }` | Alphabetical |
| *(any other)* | `{ appliedAt: -1 }` | Most recent first |
