import {
  connectDB,
  getAllComments,
  insertDocument,
} from "../../../helpers/db-utils";

export default async function handler(req, res) {
  const eventID = req.query.eventID;

  let client;
  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "GET") {
    const commentsList = await getAllComments(
      client,
      "comments",
      { _id: -1 },
      { eventID: eventID }
    );
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

      let result;
      try {
        result = await insertDocument(client, "comments", newComment);
        // assign generated id to commentID
        newComment.id = result.insertedId;
      } catch (error) {
        res.status(500).json({ message: "Inserting comment failed!" });
      }

      res
        .status(201)
        .json({ message: "Comment created.", comment: newComment });
    }
  }

  client.close();
}
