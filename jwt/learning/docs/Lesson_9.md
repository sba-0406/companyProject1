# Lesson 9: Password Hashing (Bcrypt)

Right now, if someone steals our `users` array, they can see everyone's password (`123`). This is a huge security risk.
In this lesson, we will learn how to **Hash** passwords so that even the database admin can't read them.

## 1. What is Hashing?
Hashing is a "one-way" mathematical function.
- `input: "123"` -> `output: "$2b$10$abcdef..."`
- You cannot go backwards from the output to `123`.
- To check a password, you hash the "attempt" and see if it matches the stored hash.

## 2. Your Task

### Step 1: Install `bcrypt`
```bash
npm install bcrypt
```

### Step 2: Update `controllers/userController.js`
We need to hash the password during **Signup** and compare it during **Login**.

**Signup Fix:**
```javascript
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const { username, password } = req.body;
    
    // 1. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 rounds of security
    
    // 2. Save the user with the HASHED password
    const user = model.createuser({ username, password: hashedPassword });
    res.status(201).json(user);
};
```

**Login Fix:**
```javascript
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = model.findUserByName(username);

    if (!user) return res.status(400).json({ message: "User not found" });

    // 2. Compare the attempt with the hash
    try {
        if (await bcrypt.compare(password, user.password)) {
            // ... generate tokens ...
        } else {
            res.status(400).json({ message: "Wrong password" });
        }
    } catch (err) {
        res.status(500).send();
    }
};
```

## 3. Why wait?
Bcrypt is "slow" on purpose to prevent hackers from trying billions of passwords per second. This is why we use `async/await`.

Ready to make your users' data unreadable?
