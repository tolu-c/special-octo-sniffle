import { buildFilePath, readDataFromFilePath } from "../api/feedback";

const FeedBackPage = ({ feedbackItems }) => {
  return (
    <ul>
      {feedbackItems.map((feedbackItem) => (
        <li key={feedbackItem.id}>
          <p> {feedbackItem.email}</p>
          <p> {feedbackItem.feedback}</p>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = buildFilePath();
  const data = readDataFromFilePath(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedBackPage;
