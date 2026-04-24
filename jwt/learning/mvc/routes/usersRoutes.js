const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/signup', controller.createUser);
router.post('/login', controller.login);
router.post('/token', controller.refresh); // Standard name for refresh endpoint
router.post('/logout', controller.logout);
router.get('/:name', controller.getUserByName);

module.exports = router;
