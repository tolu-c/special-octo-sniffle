import EventItem from "./EventItem";

function EventList(props) {
  const { items } = props;
  
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
}

export default EventList;
