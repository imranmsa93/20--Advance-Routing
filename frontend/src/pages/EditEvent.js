 
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from 'react-router-dom';
function EditEventPage() {
  const event = useRouteLoaderData('event-detail');
  console.log("EditEventPage ", event);
  return (
    <EventForm event={event} method='PATCH'/>
  );
}

export default EditEventPage;