const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/', authenticate, transactionController.getTransactions);
router.post('/', authenticate, transactionController.addTransaction);

module.exports = router;