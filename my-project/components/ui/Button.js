import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className="bg-teal-500 text-white capitalize flex justify-center items-center rounded-md px-6 py-2 w-auto space-x-2 flex-none">
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className="bg-teal-500 hover:bg-teal-700 flex items-center justify-center text-white capitalize rounded-md px-6 py-2 space-x-2 flex-none"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
