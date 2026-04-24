// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// // --- MOCK DATABASE ---
// // In the real world, this would be MongoDB or SQL.
// // For now, it's just a variable.
// let posts = [
//     { id: 1, title: 'My First Post' },
//     { id: 2, title: 'Express is cool' }
// ];

// // --- ROUTES ---

// // 1. GET ALL Posts
// // GET /posts
// app.get('/posts', (req, res) => {
//     res.json(posts);
// });

// // 2. GET ONE Post (Dynamic URL)
// // GET /posts/1
// app.get('/posts/:id', (req, res) => {
//     // req.params.id is a string ("1"), so we convert to Int
//     const id = parseInt(req.params.id);

//     const post = posts.find(p => p.id === id);

//     if (post) {
//         res.json(post);
//     } else {
//         res.status(404).json({ message: "Post not found" });
//     }
// });

// // 3. CREATE a Post
// // POST /posts  Body: { "title": "New Post" }
// app.post('/posts', (req, res) => {
//     const newPost = {
//         id: posts.length + 1, // Auto-increment ID
//         title: req.body.title
//     };

//     posts.push(newPost);

//     // 201 = "Created"
//     res.status(201).json(newPost);
// });

// // 4. DELETE a Post
// // DELETE /posts/1
// app.delete('/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);

//     // Keep only posts that DO NOT match the ID
//     posts = posts.filter(p => p.id !== id);

//     // 204 = "No Content" (Successful, but nothing to return)
//     res.status(204).send();
// });

// app.listen(PORT, () => {
//     console.log(`REST API running on port ${PORT}`);
// });



const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let posts = [
    { id: 1, title: "random1" },
    { id: 2, title: "random2" }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`fetching post with id : ${id}`);
    const post = posts.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "post not found" })
    }
});

app.post('/posts', (req, res) => {
    const { title } = req.body;
    const newP = {
        id: posts.length + 1,
        title: title
    }
    posts.push(newP);
    res.status(201).json(newP);
});

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`REST API running on port ${port}`);
})