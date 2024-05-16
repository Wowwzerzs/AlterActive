import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({ id: user.id, email: user.email });
  } catch (error) {
    console.log("error -->", error);
    res.status(400).json({ error });
  }
}
