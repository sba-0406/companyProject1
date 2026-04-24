const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const {
    getAllUsers,
    createUser,
    updateUser,
    updateUserRole,
    deleteUser
} = require('../controllers/userController');

// All routes require admin authorization
router.use(protect);
router.use(authorize('admin'));

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.put('/:id/role', updateUserRole);
router.delete('/:id', deleteUser);

module.exports = router;
