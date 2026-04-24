# Lesson 7: JWT (The Access Pass)

You have Users. Now, when they log in, instead of just saying "Success", we will give them a **Ticket** (JWT).

## 1. What is a JWT?
**JSON Web Token**. It's a string like `xxxxx.yyyyy.zzzzz` that contains:
1.  **Who** the user is (`{ username: "ali" }`).
2.  **When** it expires (`1.5 minutes`).
3.  **Signature** (Proof that WE created it).

## 2. Your Task

### Step 1: Configuration (`.env`)
Create a `.env` file in `jwt/` (root) to hide our secrets.
```env
ACCESS_TOKEN_SECRET=swsh23hjddnns
REFRESH_TOKEN_SECRET=m2db33847ddc
```

### Step 2: Update `server.js`
We need to load `.env` and `cors` (so our frontend can talk to us later).
```javascript
require('dotenv').config();
const cors = require('cors');
// ...
app.use(cors());
app.use(express.json());
```

### Step 3: Update `controllers/userController.js`
Use `jsonwebtoken` to sign a token.
```javascript
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    // ... validate user ...
    if (password === user.password) {
        // Generate Token
        const accessToken = jwt.sign(
            { username: user.username }, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1.5m' } // 90 seconds
        );
        
        res.json({ accessToken });
    }
    // ...
};
```

### Step 4: Create Middleware (`middleware/auth.js`)
A guard that checks the ticket.
```javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid Token
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
```

### Step 5: Protect a Route (`routes/postsRoutes.js`)
```javascript
const authenticateToken = require('../../middleware/auth');

// Protect the routes!
router.get('/', authenticateToken, postcontroller.getPosts);
```
