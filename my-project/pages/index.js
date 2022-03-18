import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <h1 className="">
        <EventList items={featuredEvents} />
      </h1>
    </div>
  );
}
