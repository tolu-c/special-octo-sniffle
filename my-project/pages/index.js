import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <div className="bg-teal-100 h-screen flex justify-center items-center">
        <EventList items={featuredEvents} />
      </div>
    </div>
  );
}
