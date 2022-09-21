import fs from "fs";
import path from "path";

export const buildFilePath = () => path.join(process.cwd(), "data", "feedback.json");

export const readDataFromFilePath = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = buildFilePath();
    const data = readDataFromFilePath(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFilePath();
    const data = readDataFromFilePath(filePath);
    res.status(200).json({ feedback: data });
  }
}
