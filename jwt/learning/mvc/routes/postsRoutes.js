// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/postsController');

// // Map URL patterns to Controller functions
// router.get('/', controller.getPosts);
// router.get('/:id', controller.getPostById);
// router.post('/', controller.createPost);

// module.exports = router;

const express = require('express');
const postcontroller = require('../controllers/postsController');
const router = express.Router();


const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, postcontroller.getPosts);
router.get('/:id', postcontroller.getPostById);
router.post('/', postcontroller.createPost);
router.delete('/:id', postcontroller.delPost);

// Route for getting a user by name (moved from userController logic if intended, or just cleanup)
// For now, removing the incomplete line.

module.exports = router;