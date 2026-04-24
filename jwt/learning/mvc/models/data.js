let posts = [
    { id: 1, title: 'MVC is clean' },
    { id: 2, title: 'Separation of concerns' }
];

let users = [
    { id: 1, username: "sba", password: "123" },
    { id: 2, username: "hassan", password: "123" }
]

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

const findUserByName = (name) => users.find(u => u.username === name);

const createuser = (data) => {
    const newuser = {
        id: users.length + 1,
        ...data
    };
    users.push(newuser);
    return newuser;
}

// --- REFRESH TOKENS ---
let refreshTokens = [];

const addRefreshToken = (token) => refreshTokens.push(token);
const checkRefreshToken = (token) => refreshTokens.includes(token);
const removeRefreshToken = (token) => {
    refreshTokens = refreshTokens.filter(t => t !== token);
};

module.exports = {
    getAll, findById, create, deleteById,
    findUserByName, createuser,
    addRefreshToken, checkRefreshToken, removeRefreshToken
};
