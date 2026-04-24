# Lesson 3: REST API Structure

Now that we have Express, let's build something real. We are going to build a **REST API** for a social media app (Mock Version).

## 1. What is REST?
**RE**presentational **S**tate **T**ransfer. It's just a fancy way of saying:
"Use HTTP verbs to do stuff to Data (Resources)."

### The Dictionary
*   **Resource**: The "Thing" you are managing. (e.g., `Posts`, `Users`, `Comments`).
*   **Collection**: A list of resources (`/posts`).
*   **Item**: A specific resource (`/posts/1`).

### The 4 Main Actions (CRUD)
| Action | HTTP Method | URL Pattern | Meaning |
| :--- | :--- | :--- | :--- |
| **Create** | `POST` | `/posts` | "Add a new post to the list" |
| **Read (All)** | `GET` | `/posts` | "Give me the whole list" |
| **Read (One)** | `GET` | `/posts/:id` | "Give me the post with ID 1" |
| **Delete** | `DELETE` | `/posts/:id` | "Remove post with ID 1" |

*(Note: There is also `PUT`/`PATCH` for Update, but we'll skip those for now).*

## 2. Your Task
Create a new file `learning/rest_api.js`.

### The "Database"
Since we don't have a real database yet, we will just use a global variable.
```javascript
const posts = [
    { id: 1, title: 'My First Post' },
    { id: 2, title: 'Hello World' }
];
```

### The Code
```javascript
const express = require('express');
const app = express();
app.use(express.json()); // Don't forget this!

// Mock Database
let posts = [
    { id: 1, title: 'My First Post' },
    { id: 2, title: 'Hello World' }
];

// 1. GET ALL
app.get('/posts', (req, res) => {
    res.json(posts);
});

// 2. GET ONE (Dynamic Route)
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id); // URLs are always strings!
    const post = posts.find(p => p.id === id);
    
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// 3. CREATE
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1, // Simple auto-increment
        title: req.body.title
    };
    posts.push(newPost);
    res.status(201).json(newPost); // 201 = "Created"
});

// 4. DELETE
app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== id);
    res.status(204).send(); // 204 = "No Content" (Success, but nothing to return)
});

app.listen(3000, () => {
    console.log('REST API running on port 3000');
});
```

## 3. Verify with Postman
1.  **GET /posts** -> See the list.
2.  **POST /posts** -> Body: `{"title": "New Post"}` -> See the new item.
3.  **GET /posts** -> See the list with 3 items!
4.  **DELETE /posts/1** -> Status 204.
5.  **GET /posts** -> Item 1 is gone.
