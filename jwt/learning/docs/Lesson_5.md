# Lesson 5: The Model Layer (Abstraction)

Right now, your **Controller** is doing too much work.
It knows that `posts` is an array. It knows how to `splice` it.
**Problem**: What if we switch to a real database (SQL/MongoDB) later? We would have to rewrite *every* controller function.

**Solution**: Move the "How" into the **Model**.
The Controller should just say: `Model.create(data)`. It shouldn't care *how* it's stored.

## 1. Your Task
We will refactor `learning/mvc/models/data.js` to be smarter.

### Step 1: Update the Model (`models/data.js`)
Instead of just exporting the array, we export functions to manage it.

```javascript
let posts = [
    { id: 1, title: 'MVC is clean' },
    { id: 2, title: 'Separation of concerns' }
];

// Helper functions (The "Interface")
const getAll = () => posts;

const findById = (id) => posts.find(p => p.id === id);

const create = (data) => {
    const newPost = {
        id: posts.length + 1,
        ...data // Copy properties from data (title, etc)
    };
    posts.push(newPost);
    return newPost;
};

const deleteById = (id) => {
    const index = posts.findIndex(p => p.id === id);
    if (index > -1) {
        posts.splice(index, 1);
        return true; // Deleted
    }
    return false; // Not found
};

module.exports = { getAll, findById, create, deleteById };
```

### Step 2: Update the Controller (`controllers/postsController.js`)
 Now the controller looks beautiful and clean.

```javascript
// Import the FUNCTIONS, not the array
const Model = require('../models/data'); 

const getPosts = (req, res) => {
    const posts = Model.getAll();
    res.json(posts);
};

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = Model.findById(id);
    
    if (post) res.json(post);
    else res.status(404).json({ message: "Not Found" });
};

const createPost = (req, res) => {
    const newPost = Model.create(req.body); // Just pass the body!
    res.status(201).json(newPost);
};

const delPost = (req, res) => {
    const id = parseInt(req.params.id);
    const success = Model.deleteById(id);
    
    if (success) res.status(204).send();
    else res.status(404).json({ message: "Not Found" });
};

module.exports = { getPosts, getPostById, createPost, delPost };
```

## 3. Why this is awesome
1.  **Cleaner Controller**: No more `splice` logic in your routes.
2.  **Future Proof**: If you switch to a Database later, you **ONLY** change `models/data.js`. The Controller stays exactly the same!
