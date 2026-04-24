const express = require('express');
const { submitSimulation, getHistory, shareSimulation } = require('../controllers/simulationController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.post('/submit', submitSimulation);
router.post('/:id/share', shareSimulation);
router.get('/history', getHistory);

module.exports = router;
