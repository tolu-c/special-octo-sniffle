import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <a className='bg-teal-500 text-white capitalize flex justify-center items-center rounded-md px-6 py-2 w-auto space-x-2 flex-1'>{props.children}</a>
    </Link>
  );
}

export default Button;
