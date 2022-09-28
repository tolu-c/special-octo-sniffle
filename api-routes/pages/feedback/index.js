import { Fragment, useState } from "react";
import { buildFilePath, readDataFromFilePath } from "../api/feedback";

const FeedBackPage = ({ feedbackItems }) => {
  const [feedbackData, setFeedbackData] = useState([]);

  const loadFeedback = (id) => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  };

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((feedbackItem) => (
          <li key={feedbackItem.id}>
            <p> {feedbackItem.feedback}</p>
            <button onClick={loadFeedback.bind(null, feedbackItem.id)}>
              Show details
            </button>
          </li>
        ))}
      </ul>
      {feedbackData && (
        <Fragment>
          <hr />
          <p>{feedbackData.email}</p>
        </Fragment>
      )}
    </Fragment>
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
