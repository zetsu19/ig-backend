import express from "express";
import { userPost } from "../../controller/post/get-user-post.js";
import { createPost } from "../../controller/post/create-post.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { alluserPost } from "../../controller/post/get-all-user-post.js";
import { togglePostLike } from "../../controller/post/toggle-post-like.js";
import { clickedUserPost } from "../../controller/post/get-clicked-user-post.js";

const postRouter = express.Router();
postRouter.get("/userPost", authMiddleware, userPost);
postRouter.get("/allPost", authMiddleware, alluserPost);
postRouter.post("/createPost", authMiddleware, createPost);
postRouter.post("/post/toggle-like/:postId", authMiddleware, togglePostLike);
postRouter.get("/clicked-user-post/:userId", authMiddleware, clickedUserPost);

export default postRouter;
