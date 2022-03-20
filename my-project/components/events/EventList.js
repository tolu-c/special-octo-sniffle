import EventItem from "./EventItem";

function EventList(props) {
  const { items } = props;

  return (
    <ul className='my-4 p-4 w-4/6 max-w-lg flex flex-col space-y-4 justify-center items-center'>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
          className='mb-4'
        />
      ))}
    </ul>
  );
}

export default EventList;
