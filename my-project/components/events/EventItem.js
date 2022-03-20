import Link from "next/link";
import Button from '../ui/Button'

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

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
            <time className="font-bold text-base text-stone-500">
              {humanReadableDate}
            </time>
          </div>
          <div className="mt-3">
            <address className="text-base font-medium">
              {formattedAddress}
            </address>
          </div>
        </div>

        <div className="text-right mt-10">
          <Button link={exploreLink}>Explore events</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
