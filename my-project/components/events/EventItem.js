import Button from "../ui/Button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  // icons => location, calendar, arrow-right

  return (
    <li className="border rounded-md h-52 shadow-lg grid grid-cols-5 overflow-hidden">
      <img
        src={"/" + image}
        alt={title}
        className="w-full h-full object-cover col-span-2"
      />
      <div className="bg-white text-stone-700 p-3 col-span-3 w-full">
        <div>
          <h2 className="text-xl capitalize font-medium mb-3 text-stone-800">
            {title}
          </h2>
          <div>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <time className="font-bold text-base text-stone-500">
              {humanReadableDate}
            </time>
          </div>
          <div className="mt-3">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <address className="text-base font-medium">
              {formattedAddress}
            </address>
          </div>
        </div>

        <div className="text-right mt-10">
          <Button link={exploreLink}>
            <span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span>Explore events</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
