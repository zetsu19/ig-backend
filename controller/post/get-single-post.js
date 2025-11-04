import { PostModel } from "../../schema/post.schema.js";

export const getSinglePost = async (req, res) => {
    const { postId } = req.params;
    const post = await PostModel.findById(postId).populate("user", "username profilePicture");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
};