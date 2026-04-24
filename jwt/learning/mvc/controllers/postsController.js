const Model = require('../models/data');

/* 
// --- OLD WAY (Direct Array Manipulation) ---
const { posts } = require('../models/data');

const getPosts = (req, res) => {
    res.json(posts);
};

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (post) res.json(post);
    else res.status(404).json({ message: "Not Found" });
};

const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    posts.push(newPost);
    res.status(201).json(newPost);
};

const delPost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index > -1) {
        posts.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Not Found" });
    }
};
*/

// --- NEW WAY (Using Model Methods) ---

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
    const newPost = Model.create(req.body);
    res.status(201).json(newPost);
};

const delPost = (req, res) => {
    const id = parseInt(req.params.id);
    const success = Model.deleteById(id);

    if (success) res.status(204).send();
    else res.status(404).json({ message: "Not Found" });
};

module.exports = { getPosts, getPostById, createPost, delPost };