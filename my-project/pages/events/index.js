import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
        <EventSearch />
        <EventList items={events} />
    </Fragment>
  );
}
