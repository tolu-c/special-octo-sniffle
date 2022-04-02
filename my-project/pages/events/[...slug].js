import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;
  // console.log(filteredData);

  if (!filteredData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <p className="text-red-600 px-4 text-base shadow-lg shadow-red-200 font-medium rounded-md w-2/3 mx-auto text-center my-4 py-1 bg-red-300 border border-red-500">
        Invalid Filter, Please adjust your values!
      </p>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <p className="text-amber-900 px-4 text-base shadow-lg shadow-amber-200 font-medium rounded-md w-2/3 mx-auto text-center my-4 py-1 bg-amber-300 border border-amber-500">
        No Events found!
      </p>
    );
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
        <ResultsTitle date={date} />
        <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
