import { getFeaturedEvents } from '../dummy-data'

export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <h1 className="">
        HellThe home page
      </h1>
    </div>
  );
}
