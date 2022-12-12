import { hashPassword } from "../../../lib/auth";
import { connectDB } from "../../../lib/db";

const handler = async (req, res) => {
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res
      .status(422)
      .json({
        message:
          "Invalid input - password should be at least 7 characters long.",
      });
  }

  const client = await connectDB();
  const db = client.db();

  db.collection("members").insertOne({
    email,
    password: hashPassword(password),
  });

  res.status(201).json({ message: "Created user!" });
};

export default handler;
