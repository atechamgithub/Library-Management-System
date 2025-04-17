// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// const { connectdb } = require("./DB/connectDB"); // Import the connectdb function
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectdb } from './DB/connectDB.js' // Import the connectdb function
import authRoutes from './routes/authRoutes.js'
import bookRoutes from './routes/bookRoutes.js'
import adminRoutes from './routes/adminRoutes.js' 

dotenv.config(); 
// const authRoutes = require("./routes/authRoutes");
// const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 5000; // Define PORT, default to 5000 if not set in .env

app.use(cors());
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use('/api/admin', adminRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectdb(); // Call the connectdb function to connect to MongoDB
});
