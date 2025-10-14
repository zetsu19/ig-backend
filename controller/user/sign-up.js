import { hash } from "bcrypt";
import { UserModel } from "../../schema/user.schema.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const JWT_SECRET = "SECRET";
  const { email, password, username } = req.body;
  const saltRound = 10;
  const hashedPassword = await hash(password, saltRound);
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "email already exists" });
  } else {
    const user = await UserModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
    const accessToken = jwt.sign(
      {
        data: user,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json(accessToken);
  }
};
