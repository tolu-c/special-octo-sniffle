import { MongoClient } from "mongodb";
const uri = process.env.MONGO_DB_URI;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.enteredEmail;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(uri);
    const db = client.db();
    await db.collection("emails").insertOne({ email: email });

    client.close();
    res.status(201).json({ message: "Signed up successfully." });
  }
}
