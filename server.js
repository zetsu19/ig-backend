import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./router/post/post.route.js";
import userRouter from "./router/user/user.route.js";
import commentRouter from "./router/comment/comment.route.js";
const app = express();
const port = 10000;

app.use(cors());
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect(
`${process.env.MONGODB_URI}`
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

connect();

app.use("/", userRouter);

app.use("/", postRouter);

app.use("/", commentRouter);

app.listen(port, () => {
  console.log(`Instagram backend is running on port ${port}`);
});
