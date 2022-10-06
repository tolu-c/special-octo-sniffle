import { MongoClient } from "mongodb";
const uri = process.env.MONGO_DB_URI;

export default async function handler(req, res) {
  const eventID = req.query.eventID;

  const client = await MongoClient.connect(uri);

  if (req.method === "GET") {
    const dummyList = [
      { id: "e1", name: "Tolu", text: "A first comment" },
      { id: "e2", name: "tolu-c", text: "A second comment" },
      { id: "e3", name: "webDevTolu", text: "A third comment" },
    ];
    res.status(200).json({ comments: dummyList });
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

      console.log({ result });

      // assign generated id to commentID
      newComment.id = result.insertedId;
      res
        .status(201)
        .json({ message: "Comment created.", comment: newComment });
    }
  }

  client.close();
}
