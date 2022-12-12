import { hashPassword } from "../../../lib/auth";
import { connectDB } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 7 characters long.",
    });
    return;
  }

  const client = await connectDB();
  const db = client.db();

  const existingUser = await db.collection("members").findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const result = await db.collection("members").insertOne({
    email,
    password: await hashPassword(password),
  });
  res.status(201).json({ message: "Created user!" });
  client.close();
};

export default handler;
