import { PostModel } from "../../schema/post.schema.js";

export const togglePostLike = async (req, res) => {
  const user = req.user;
  const params = req.params;
  const postId = params.postId;

  const post = await PostModel.findById(postId);
  const postLike = post.like;
  const isLiked = postLike.includes(user._id);

  if (isLiked) {
    await PostModel.findByIdAndUpdate(postId, {
      like: postLike.filter((likes) => likes.toString() !== user._id),
    });
  } else {
    await PostModel.findByIdAndUpdate(postId, {
      like: [...postLike, user._id],
    });
  }

  res.status(200).json({ message: "succesfully liked" });
};
