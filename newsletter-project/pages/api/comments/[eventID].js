export default function handler(req, res) {
  const eventID = req.query.eventID;

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
        id: new Date().toISOString(),
        name,
        email,
        text,
      };
      console.log(newComment);
      res
        .status(201)
        .json({ message: "Comment created.", comment: newComment });
    }
  }
}
