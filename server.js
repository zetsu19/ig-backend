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

const allowedOrigins = [
  "https://instagram-frontend-iota.vercel.app",
  "http://localhost:5173"
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.options("*", cors());

app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

connect();

app.use("/", userRouter);
app.use("/", postRouter);
app.use("/", commentRouter);

app.listen(port, () => {
  console.log(`🚀 Instagram backend running on port ${port}`);
});
