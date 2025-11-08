import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./router/post/post.route.js";
import userRouter from "./router/user/user.route.js";
import commentRouter from "./router/comment/comment.route.js";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 10000;

dotenv.config();

// ✅ Configure CORS properly
const allowedOrigins = [
  "https://instagram-frontend-iota.vercel.app", // your Vercel frontend
  "http://localhost:5173", // optional: for local testing
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// ✅ Optional: handle preflight requests explicitly
app.options("*", cors());

app.use(express.json());

// ✅ Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

connect();

// ✅ Routes
app.use("/", userRouter);
app.use("/", postRouter);
app.use("/", commentRouter);

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Instagram backend running on port ${port}`);
});
