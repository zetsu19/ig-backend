import { UserModel } from "../../schema/user.schema.js";

export const getUserInfo = async(req, res) => {
const userId = req.params.userId;
const user = await UserModel.findById(userId)
res.status(200).json(user)
}