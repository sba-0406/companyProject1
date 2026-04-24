const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware'); // All chat routes are protected
const chatController = require('../controllers/chatController');

router.use(protect);

// Start a new session (POST /api/chat/start)
router.post('/start', chatController.startSession);

// Send a message (POST /api/chat/message)
router.post('/message', chatController.sendMessage);

// Get session history (GET /api/chat/:id)
router.get('/:id', chatController.getSession);

// End session and get report (POST /api/chat/end)
router.post('/end', chatController.endSession);

module.exports = router;
