
import { Link } from "react-router-dom";

const DUMMEY_EVENT = [

    { id: 'e1', title: 'First Event' },
    { id: 'e2', title: 'Second Event' },
    { id: 'e3', title: 'Third Event' },
    { id: 'e4', title: 'Fourth Event' },
    { id: 'e5', title: 'Fifth Event' }, 
];

function EventsPage() {
  return (
    <>
    <h1>Events Page</h1>;
    {DUMMEY_EVENT.map((event) => (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>{event.title}</Link>
      </li>
    ))};
    </>
  );
}

export default EventsPage;