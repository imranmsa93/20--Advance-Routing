import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { redirect } from "react-router-dom";
function EventDetailPage() {
  const event = useRouteLoaderData('event-detail');
 //  console.log("EventDetailPage " , event);

  return (
    <EventItem event={event} />
  )
}

export default EventDetailPage;

export async function fetchEventDetails({request, params}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId);
  if (!response.ok) {
    throw response;
  } else {
    const resData = await response.json();
     console.log("fetchEventDetails " , resData.event);
    return resData.event;
  }
}
export async function deleteEvent({request, params}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
  });
  if (!response.ok) {
    throw response;
  }
  return redirect('/events');
}