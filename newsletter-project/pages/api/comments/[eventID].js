import { MongoClient } from "mongodb";
const uri = process.env.MONGO_DB_URI;

export default async function handler(req, res) {
  const eventID = req.query.eventID;

  const client = await MongoClient.connect(uri);

  if (req.method === "GET") {
    const db = client.db("newsletter");
    const commentsList = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ comments: commentsList });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    } else {
      const newComment = {
        name,
        email,
        text,
        eventID,
      };
      console.log(newComment);

      const db = client.db("newsletter");
      const result = await db.collection("comments").insertOne(newComment);

      // assign generated id to commentID
      newComment.id = result.insertedId;
      res
        .status(201)
        .json({ message: "Comment created.", comment: newComment });
    }
  }

  client.close();
}
