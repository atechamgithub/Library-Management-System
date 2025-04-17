// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  dateIssued: { type: Date, default: Date.now },
  dateReturned: Date,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;