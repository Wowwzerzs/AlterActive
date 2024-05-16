import { authMiddleware } from "../../../utils/authMiddleware";

const handler = (req, res) => {
  res.status(200).json({ message: "Protected route" });
};