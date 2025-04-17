// const Transaction = require('../models/Transaction');
import Transaction from '../models/Transaction.js';

exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find().populate('user book');
  res.json(transactions);
};

exports.addTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.status(201).json(transaction);
};