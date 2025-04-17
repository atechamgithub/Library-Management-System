// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');
import express from 'express'
import {login} from '../controllers/authController.js'

const router = express.Router();

router.post('/login', login);

export default router;
