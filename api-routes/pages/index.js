import { useRef } from "react";

function HomePage() {
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
    </div>
  );
}

export default HomePage;
