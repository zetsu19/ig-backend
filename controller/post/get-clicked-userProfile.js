import { PostModel } from "../../schema/post.schema.js"

export const getPostById = async (req, res) => {
  const { postId } = req.params;
  const post = await PostModel.findById(postId).populate(
    "user",
    "_id username followers following"
  );
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(post);
};
