import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRouter from "./router/post/post.route.js";
import userRouter from "./router/user/user.route.js";
import commentRouter from "./router/comment/comment.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 10000;

app.use(cors({
  origin: ["https://instagram-frontend-iota.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

app.options("*", cors());
app.use(express.json());


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

connect();

app.use("/", userRouter);
app.use("/", postRouter);
app.use("/", commentRouter);

app.listen(port, () => {
  console.log(`🚀 Instagram backend running on port ${port}`);
});
