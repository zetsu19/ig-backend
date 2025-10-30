import { UserModel } from "../../schema/user.schema.js";

export const getAllUsers = async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
};