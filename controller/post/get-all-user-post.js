import { PostModel } from "../../schema/post.schema.js";

export const alluserPost = async (req, res) => {
  const allPosts = await PostModel.find().populate("user");
  res.status(200).json(allPosts);
};
