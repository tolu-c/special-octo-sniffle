import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-utils";

function AllEventsPage({ allEvents }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      allEvents,
    },
    revalidate: 1800,
  };
}

export default AllEventsPage;
