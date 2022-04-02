import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-3 border border-red-400 bg-red-100 my-6 mx-auto w-auto max-w-2xl">
      <h1>sorry, we could not find this page.</h1>
      <ul>
        <li>make sure the url is correct.</li>
      </ul>
      <Link href="/">
        <p className="capitalize text-lg font-medium hover:underline text-gray-400 hover:text-gray-600">home</p>
      </Link>
    </div>
  );
}
