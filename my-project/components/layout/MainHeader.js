import Link from "next/link";

function MainHeader() {
  return (
    <header className="w-full h-12 bg-gray-800 flex items-center justify-between px-12">
      <div className="text-teal-200 font-bold text-xl hover:underline">
        <Link href="/">Events</Link>
      </div>

      <nav>
        <ul>
          <li className="text-teal-200 text-base font-light hover:font-medium hover:underline">
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
