import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  caption: { type: String, required: true },
  like: [{ type: Schema.Types.ObjectId, required: true }],
  images: {
    type: [{ type: String, required: true }],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const PostModel = mongoose.model("posts", PostSchema);
