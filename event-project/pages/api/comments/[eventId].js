import {
  insertDocument,
  connectDatabase,
  getAllDocuments,
} from "../../helpers/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;
  try {
    const client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
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
      resstatus(422).json({ message: "Invalid input." });
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    let result;
    try {
      const result = insertDocument(client, "comments", newComment);
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting the comment failed!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed!" });
    }
  }
}
