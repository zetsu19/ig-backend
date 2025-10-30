import { PostModel } from "../../schema/post.schema.js";

export const deleteUserPost = async (req, res) => {
  const { postId } = req.params;
  const ustgah = await PostModel.findByIdAndDelete(postId);
  res.status(200).json(ustgah);
};
