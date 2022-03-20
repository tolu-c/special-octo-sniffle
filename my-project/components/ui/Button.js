import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <a>{props.children}</a>
    </Link>
  );
}

export default Button;
