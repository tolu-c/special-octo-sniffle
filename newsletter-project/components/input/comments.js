import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments({ eventID }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  console.log(comments);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventID}`)
        .then((res) => {
          res.json();
        })
        .then((data) => {
          setComments(data?.comments);
        });
    }
  }, [showComments]);
  console.log(comments);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventID}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
