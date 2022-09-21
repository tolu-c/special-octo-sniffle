import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    const data = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const loadFeedback = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            ref={feedbackRef}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedbacks</button>
      {feedbackItems.length === 0 && <p>No Feedbacks!</p>}
      {feedbackItems.length !== 0 && (
        <ul>
          {feedbackItems.map((feedbackItem) => (
            <li key={feedbackItem.id}>
              <p> {feedbackItem.email}</p>
              <p> {feedbackItem.feedback}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
