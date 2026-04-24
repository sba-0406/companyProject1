const express = require('express');
const { getUsers, authorizeUser, updateRole } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(protect);
router.use(authorize('admin'));

router.get('/users', getUsers);
router.put('/users/:id/authorize', authorizeUser);
router.put('/users/:id/role', updateRole);

module.exports = router;
