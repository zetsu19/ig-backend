import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRouter from "./router/post/post.route.js";
import userRouter from "./router/user/user.route.js";
import commentRouter from "./router/comment/comment.route.js";

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoURI); // no need for deprecated options
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // exit the process if DB connection fails
  }
};

// Connect to MongoDB
connectDB();

// Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Health check route (optional but recommended)
app.get("/", (req, res) => {
  res.status(200).send("Instagram backend is live!");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Instagram backend is running on port ${port}`);
});
