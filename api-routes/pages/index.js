import { useRef } from "react";

function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    fetch('')
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form action="#">
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
            cols="10"
            rows="5"
          ></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
