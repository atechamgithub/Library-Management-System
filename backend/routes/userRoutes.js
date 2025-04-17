const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');

router.get('/', authenticate, authorizeAdmin, userController.getUsers);
router.post('/', authenticate, authorizeAdmin, userController.createUser);

module.exports = router;