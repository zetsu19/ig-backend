import { UserModel } from "../../schema/user.schema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const JWT_SECRET = "SECRET";
  const body = req.body;
  const { email, password } = body;
  const user = await UserModel.findOne({ email });
  if (user) {
    const hashedPassword = user.password;
    const isValid = compare(password, hashedPassword);
    if (isValid) {
      const accessToken = jwt.sign(
        {
          data: user,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json(accessToken);
    } else {
      res.status(404).json({ message: "wrong password" });
    }
  } else {
    res.status(404).json({ message: "please signup" });
  }
};
