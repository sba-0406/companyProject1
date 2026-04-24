# Feature Flow: Admin HR Management 🛡️

## Admin Dashboard & HR Account Lifecycle

```mermaid
sequenceDiagram
    participant Admin
    participant MW as Middleware
    participant Server as Express Server
    participant DB as MongoDB

    Admin->>Server: GET /admin/dashboard
    Server->>MW: protect() → jwt.verify(cookie)
    MW->>MW: authorizeAdmin() → req.user.role === 'admin'?
    alt NOT admin
        MW-->>Admin: 403 Forbidden
    else IS admin
        Server->>DB: User.find({ role: 'hr' }).sort({ createdAt: -1 })
        DB-->>Server: [ hrUser1, hrUser2, ... ]
        Server-->>Admin: Render admin-dashboard.ejs { user, hrUsers[], title }
    end

    Admin->>Server: POST /api/admin/hr  { name, email, password, company }
    Server->>DB: User.findOne({ email }) → duplicate check
    alt email exists
        Server-->>Admin: 400 { error: 'User already exists' }
    else email available
        Server->>DB: User.create({ name, email, password, role: 'hr' })
        Note over DB: Pre-save hook: bcrypt.hash(password, 10) runs automatically
        DB-->>Server: New HR user saved
        Server-->>Admin: 201 { success: true, data: { id, name, email } }
    end

    Admin->>Server: DELETE /api/admin/hr/:id
    Server->>DB: User.findById(id) → check role === 'hr'
    Server->>DB: hr.deleteOne()
    Server-->>Admin: { success: true, message: 'HR account deleted' }
```

---

## Key Security Rules

| Rule | Implementation |
| :--- | :--- |
| Only `admin` can access these routes | `authorizeAdmin()` middleware blocks all other roles |
| Only `hr` role can be deleted via this endpoint | Controller checks `hr.role !== 'hr'` → returns 400 |
| No cascade delete | HR's jobs remain in DB after deletion (assigned jobs become "orphaned") |
| Self-registration is candidate-only | `authController.register()` forces `role: 'candidate'` regardless of request body |
| Password never stored in plaintext | `User.js` pre-save hook runs `bcrypt.hash()` automatically before every `save()` |

---

## POST Body for Creating HR

```json
{
  "name":       "Sarah HR",
  "email":      "sarah@company.com",
  "password":   "securepassword123",
  "company":    "TechCorp",
  "department": "Engineering"
}
```

**Response:**
```json
{
  "success": true,
  "message": "HR account created successfully",
  "data": {
    "id":    "65e...abc",
    "name":  "Sarah HR",
    "email": "sarah@company.com"
  }
}
```
