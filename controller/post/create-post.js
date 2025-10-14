import { PostModel } from "../../schema/post.schema.js";

export const createPost = async (req, res) => {
  const { caption, images } = req.body;
  const post = await PostModel.create({
    caption,
    images,
    user: req.user._id,
  });

  res.status(200).json(post);
};
