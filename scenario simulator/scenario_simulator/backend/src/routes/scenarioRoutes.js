const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const {
    getScenarios,
    getScenario,
    createScenario,
    updateScenario,
    deleteScenario,
    getUniqueRoles,
    getScenarioByRoleDifficulty
} = require('../controllers/scenarioController');

router.get('/roles', protect, getUniqueRoles);
router.get('/by-role-difficulty', protect, getScenarioByRoleDifficulty);
router.get('/', protect, getScenarios);
router.get('/:id', protect, getScenario);
router.post('/', protect, authorize('admin'), createScenario);
router.put('/:id', protect, authorize('admin'), updateScenario);
router.delete('/:id', protect, authorize('admin'), deleteScenario);

module.exports = router;
