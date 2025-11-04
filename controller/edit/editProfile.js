import { UserModel } from "../../schema/user.schema.js";

export const editProfile = async (req, res) => {
  try {
    const { username } = req.body;
    const { userId } = req.params;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { username, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating username:", err);
    res.status(500).json({ message: "Server error" });
  }
};