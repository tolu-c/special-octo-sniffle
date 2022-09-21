import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage({ events }) {
  return (
    <div>
      <Head>
        <title>Next JS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you evolve to be a better developer"
        />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 3600,
  };
}

export default HomePage;
