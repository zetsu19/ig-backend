import { PostModel } from "../../schema/post.schema.js";

export const clickedUserPost = async (req, res) => {
  const userId = req.params.userId;
  const userPost = await PostModel.find({ user: userId });
  res.status(200).json(userPost);
};
