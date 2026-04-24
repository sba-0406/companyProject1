# Lesson 6: Authentication (The "Who")

We have **Posts**. Now we need **Users**.
Before we get to JWT (the "Ticket"), we need to be able to **Login** (Check ID).

## 1. The Plan
1.  **Update Model**: Add a `users` array to `data.js`.
2.  **Create Controller**: `usersController.js` with `signup` and `login`.
3.  **Create Routes**: `POST /signup` and `POST /login`.

## 2. Your Task

### Step 1: Update `models/data.js`
We need a place to store users.
```javascript
let posts = [ ... ];
let users = []; // New "Database" table

// ... keeps posts helpers ...

// USER HELPERS
const findUserByName = (username) => users.find(u => u.username === username);

const createUser = (user) => {
    users.push(user);
    return user;
};

// Export EVERYTHING
module.exports = { 
    getAll, findById, create, deleteById, // Posts
    findUserByName, createUser // Users
};
```

### Step 2: Create `controllers/usersController.js`
```javascript
const Model = require('../models/data');

const signup = (req, res) => {
    const { username, password } = req.body;
    
    // 1. Check if user exists
    if (Model.findUserByName(username)) {
        return res.status(400).json({ message: "User already exists" });
    }

    // 2. Create User (In real life, we HASH the password here!)
    const newUser = { username, password }; 
    Model.createUser(newUser);

    res.status(201).json({ message: "User created" });
};

const login = (req, res) => {
    const { username, password } = req.body;
    
    // 1. Find User
    const user = Model.findUserByName(username);
    if (!user) {
        return res.status(400).json({ message: "Cannot find user" });
    }

    // 2. Check Password
    if (password === user.password) {
        res.json({ message: "Success! You are logged in." });
        // NEXT LESSON: We will give them a JWT here!
    } else {
        res.status(401).json({ message: "Not Allowed" });
    }
};

module.exports = { signup, login };
```

### Step 3: Create `routes/usersRoutes.js`
```javascript
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.post('/signup', controller.signup);
router.post('/login', controller.login);

module.exports = router;
```

### Step 4: Update `server.js`
```javascript
const usersRoutes = require('./routes/usersRoutes'); // Import
// ...
app.use('/users', usersRoutes); // Mount at /users
```

## 3. Test It
1.  **POST /users/signup**: `{"username": "ali", "password": "123"}`
2.  **POST /users/login**: `{"username": "ali", "password": "123"}` -> "Success!"
3.  **POST /users/login**: `{"username": "ali", "password": "wrong"}` -> "Not Allowed"
