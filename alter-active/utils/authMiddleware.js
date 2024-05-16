import jwt from "jsonwebtoken";
import crypto from "crypto";

export function authMiddleware(handler) {
  const secretKey = crypto.randomBytes(64).toString("hex");
  return async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "no token provided" });
    }

    const token = authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}

export default authMiddleware(handler);
