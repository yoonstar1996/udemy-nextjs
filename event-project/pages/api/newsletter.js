import { insertDocument, connectDatabase } from "../../helpers/db-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid eamil address." });
      return;
    }
    let client;
    try {
      client = connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed Up!" });
  }
}
