import { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../store/notification-context";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments({ eventID }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      notificationCtx.showNotification({
        title: "Getting your comments",
        message: "Fetching your comments from our database",
        status: "pending",
      });
      fetch(`/api/comments/${eventID}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setComments(data?.comments);
          notificationCtx.showNotification({
            title: "Comment is ready",
            message: "Comments served!",
            status: "success",
          });
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Comment",
      message: "Adding your comment",
      status: "pending",
    });
    fetch("/api/comments/" + eventID, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Comment",
          message: "Comments Added!",
          status: "success",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {notificationCtx.notification?.status === "pending" && (
        <p>Loading comments...</p>
      )}
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
