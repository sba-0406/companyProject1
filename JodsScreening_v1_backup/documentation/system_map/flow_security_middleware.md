# Feature Flow: Security & Middleware 🔒

## Auth Flow + Route Protection

![Auth Flow](./visual_auth_scoring.png)
*(Left-hand chart shows the full authentication lifecycle)*

**What this shows:**
- `bcrypt.compare(inputPassword, hashedPassword)` — the hash comparison is one-way
- The JWT is signed with `jwt.sign({ id: user._id }, JWT_SECRET)` — contains only the user ID
- Set as `HttpOnly` cookie → **browser JS cannot read it** (XSS protection)
- Every subsequent request automatically sends the cookie in the `Cookie:` header
- `protect()` middleware runs `jwt.verify(token, JWT_SECRET)` and attaches the full user object to `req.user`

---

## Middleware Stack (for every private route)

```
Browser Request  ──►  cookie-parser reads 'token' from Cookie header
                              │
                              ▼
                        protect()
                     jwt.verify(token)  ──► FAIL → 401 "Session expired"
                              │ OK
                              ▼
                     req.user = await User.findById(decodedId)
                              │
                ┌─────────────┴──────────────┐
                │                            │
        HR routes only               Admin routes only
                │                            │
          authorizeHR()             authorizeAdmin()
       req.user.role === 'hr'   req.user.role === 'admin'
          FAIL → 403                  FAIL → 403
                │                            │
                └─────────────┬──────────────┘
                              │
                              ▼
                        Controller runs
```

---

## `loadUser()` — The "Soft" Middleware

Used on **public routes** (homepage, job listings) to optionally attach user context:

```js
exports.loadUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next();          // guest: carry on
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    next();                           // bad token: also carry on as guest
  }
};
```

This lets the navbar show `"Dashboard"` to logged-in users and `"Login"` to guests **without blocking** the page.

---

## Security Summary

| Feature | Value |
| :--- | :--- |
| Token Type | JWT (JSON Web Token) |
| Token Storage | `HttpOnly` Cookie (not `localStorage`) |
| Token Lifetime | 30 days |
| Password Hashing | `bcrypt` (pre-save hook in `User.js`) |
| Role System | `candidate` / `hr` / `admin` |
| Self-Registration | Forces `role: 'candidate'` regardless of request body |
| Admin / HR creation | Only via Admin dashboard (`POST /api/admin/hr`) |
