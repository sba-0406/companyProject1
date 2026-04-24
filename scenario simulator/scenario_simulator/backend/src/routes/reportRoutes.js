const express = require('express');
const { getMyReport, getSharedReports } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(protect);

router.get('/me', getMyReport);
router.get('/shared', authorize('manager'), getSharedReports);

module.exports = router;
