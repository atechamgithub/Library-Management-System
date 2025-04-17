// const Book = require('../models/Book');
import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.json(book);
};

export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};