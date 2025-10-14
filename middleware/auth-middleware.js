import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(400).json({ message: "need auth header" });

  const accesstoken = authHeader.split(" ")[1];
  if (!accesstoken) res.status(400).json({ message: "need auth token" });

  const user = jwt.verify(accesstoken, "SECRET");
  if (!user) res.status(400).json({ message: "need to sign in" });

  req.user = user.data;

  next();
};
