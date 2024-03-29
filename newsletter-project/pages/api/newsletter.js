import { connectDB, insertDocument } from "../../helpers/db-utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.enteredEmail;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;
    try {
      client = await connectDB();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }
    try {
      await insertDocument(client, "emails", { email: email });
      client.close();
    } catch (errors) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed up successfully." });
  }
}
