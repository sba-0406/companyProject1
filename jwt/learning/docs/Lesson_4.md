# Lesson 4: The MVC Pattern

You now have a working REST API in `learning/rest_api.js`.
**Problem:** It is all in one file. If we add Users, Comments, Likes, and Auth... this file will be 1000 lines long.

**Solution:** **M**odel **V**iew **C**ontroller.
*(In APIs, we usually drop the 'View' and rely on 'Routes', but it's still called MVC).*

## 1. The Structure
We are going to split your code into 3 parts:

1.  **Models (`data.js`)**: Where the data lives (`posts = [...]`).
2.  **Controllers (`postsController.js`)**: The functions (`getPosts`, `createPost`) that DO the work.
3.  **Routes (`postsRoutes.js`)**: The URLs (`router.get('/')`) that map to controllers.

## 2. Your Task
We will create a specific folder `learning/mvc` to keep this clean.

### Step 1: The Model
Create `learning/mvc/models/data.js`.
```javascript
// Just our data arrays
let posts = [
    { id: 1, title: 'MVC is clean' },
    { id: 2, title: 'Separation of concerns' }
];

module.exports = { posts }; // Export it so others can use it
```

### Step 2: The Controller
Create `learning/mvc/controllers/postsController.js`.
Move the *functions* here.
```javascript
const { posts } = require('../models/data');

// Get All
const getPosts = (req, res) => {
    res.json(posts);
};

// Get One
const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) res.json(post);
    else res.status(404).json({ message: "Not Found" });
};

// Export them
module.exports = { getPosts, getPostById };
```

### Step 3: The Routes
Create `learning/mvc/routes/postsRoutes.js`.
Map URLs to Functions.
```javascript
const express = require('express');
const router = express.Router(); // A mini-app
const controller = require('../controllers/postsController');

// The route is just '/' because we will mount it at '/posts' later
router.get('/', controller.getPosts);
router.get('/:id', controller.getPostById);

module.exports = router;
```

### Step 4: The Server (The Boss)
Create `learning/mvc/server.js`.
Wire it all together.
```javascript
const express = require('express');
const app = express();
const postsRoutes = require('./routes/postsRoutes');

app.use(express.json());

// MOUNT the routes
// "Any request starting with /posts goes to postsRoutes"
app.use('/posts', postsRoutes); 

app.listen(3000, () => {
    console.log('MVC Server running on 3000');
});
```

## 3. Run It
1.  `cd learning/mvc`
2.  `node server.js`
3.  Test `GET http://localhost:3000/posts`
