import { PostModel } from "../../schema/post.schema.js";

export const userPost = async (req, res) => {
  const posts = await PostModel.find({ user: req.user._id }).populate("user");
  res.status(200).json(posts);
};
