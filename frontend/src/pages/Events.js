import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
 const events = useLoaderData();
  console.log(events);
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function fetchEvents() {
      const response = await fetch('http://localhost:8080/eventss');
      if (!response.ok) {
       //throw new Error('Fetching events failed.');
       throw response;
      } else {
        const resData = await response.json();
         console.log(resData.events);
        return resData.events;
      }
    }
