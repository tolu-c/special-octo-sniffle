import classes from "./comment-list.module.css";

function CommentList({ items }) {
  console.log({ items });
  return (
    <ul className={classes.comments}>
      {items?.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
