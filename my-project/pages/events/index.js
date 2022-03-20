import EventList from "../../components/events/EventList"
import { getAllEvents } from "../../dummy-data"

export default function EventsPage() {
  const events = getAllEvents()
  return (
    <div className="bg-teal-100 h-screen flex justify-center items-center">
      <EventList items={events} />
    </div>
  );
}