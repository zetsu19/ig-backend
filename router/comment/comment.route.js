import express from "express";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { createComment } from "../../controller/comment/create-comment.js";
import { getComment } from "../../controller/comment/get-comment.js";

const commentRouter = express.Router();

commentRouter.post("/create-comment", authMiddleware, createComment);
commentRouter.get("/get-all-comment/:postId", authMiddleware, getComment);

export default commentRouter;
