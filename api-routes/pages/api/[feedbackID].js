import { buildFilePath, readDataFromFilePath } from "./feedback";

export default function handler(req, res) {
  const feedbackID = req.query.feedbackID;

  const filePath = buildFilePath();
  const data = readDataFromFilePath(filePath);

  const selectedFeedbackData = data.find(
    (feedback) => feedback.id === feedbackID
  );
  res.status(200).json({ feedback: selectedFeedbackData });
}
