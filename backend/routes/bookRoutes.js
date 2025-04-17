// const express = require('express');
// const router = express.Router();
// const bookController = require('../controllers/bookController');
// const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');
import express from 'express';
import {getBooks, addBook, updateBook, deleteBook} from '../controllers/bookController.js';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', authenticate, getBooks);
router.post('/', authenticate, authorizeAdmin, addBook);
router.put('/:id', authenticate, authorizeAdmin, updateBook);
router.delete('/:id', authenticate, authorizeAdmin, deleteBook);

export default router;
