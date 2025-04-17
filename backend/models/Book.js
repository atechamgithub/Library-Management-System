// const mongoose = require('mongoose');

import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  available: { type: Boolean, default: true },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
