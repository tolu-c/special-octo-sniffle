// /api/user/change-password
import { getSession } from "next-auth/react";

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
}
