import Link from "next/link";

function Button(props) {
  return (
    <Link href={props.link}>
      <a className='bg-teal-500 text-white capitalize font-light text-base px-6 py-2 rounded-md flex-initial shadow-md hover:font-normal justify-center items-center'>{props.children}</a>
    </Link>
  );
}

export default Button;
