import express from 'express';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';
import { getUsers, deleteUser } from '../controllers/adminController.js';

const router = express.Router();

// Admin-only routes
router.get('/users', authenticate, authorizeAdmin, getUsers); // Get all users
router.delete('/users/:id', authenticate, authorizeAdmin, deleteUser); // Delete a user

export default router;