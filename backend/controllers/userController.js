// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ username, password: hashedPassword, role });
  await user.save();
  res.status(201).json(user);
};