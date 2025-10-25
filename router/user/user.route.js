import { Router } from "express";
import { signUp } from "../../controller/user/sign-up.js";
import { login } from "../../controller/user/login.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { followUser } from "../../controller/user/follow.js";
import { getUserInfo } from "../../controller/user/user-information.js";

const userRouter = Router();
userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.post("/follow-toggle/:followedUserid", authMiddleware, followUser);
userRouter.get("/user-info/:userId", authMiddleware, getUserInfo);

export default userRouter;
 