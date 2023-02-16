// /api/user/change-password
import { getSession } from "next-auth/react";
import { connectDB } from "../../../lib/db";
import { hashPassword, verifyPassword } from "../../../lib/auth";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res
      .status(401)
      .json({ message: "You are not authorized to perform this action!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectDB();
  const db = client.db();
  const user = await db.collection("members").findOne({ email: userEmail });

  // checks if the user sending the request exists
  if (!user) {
    res.status(404).json({ message: "User not found!" });
    client.close();
    return;
  }

  const userCurrentPassword = user.password;
  const passwordIsSame = await verifyPassword(oldPassword, userCurrentPassword);

  // checks if oldPassword matches currentPassword
  if (!passwordIsSame) {
    res.status(403).json({ message: "password does not match" });
    client.close();
    return;
  }

  // set password to new password
  const hashedNewPassword = await hashPassword(newPassword);
  const collection = await db.collection("members");
  const result = await collection.updateOne(
    { email: userEmail },
    { $set: { password: hashedNewPassword } }
  );

  client.close();
  res.status(200).json({ message: "Password updated successfully" });
}
