const router = require('express').Router();
const celebrates = require('../middlewares/celebrates');
const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', celebrates.validateUserId, getUserById);
router.patch('/me', celebrates.validateUpdateUser, updateUser);
router.patch('/me/avatar', celebrates.validateUpdateAvatar, updateAvatar);

module.exports = router;
