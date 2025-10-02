import { Await, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import { redirect } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  //  console.log("EventDetailPage " , event);

  return (
    <>
      <Suspense fallback={ <p style={{ textAlign: "center" }}>Loading the events data</p>} >
        <Await resolve={event}>
          {(loadEvent) => <EventItem event={loadEvent} />}
        </Await>
        </Suspense>
       <Suspense fallback={ <p style={{ textAlign: "center" }}>Loading the events data</p>} >
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function singleFetch(eventId) {
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw response;
  } else {
    const resData = await response.json();
    console.log("fetchEventDetails ", resData.event);
    return resData.event;
  }
}
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //throw new Error('Fetching events failed.');
    throw response;
  } else {
    const resData = await response.json();
    console.log(resData.events);
    return resData.events;
  }
}

export async function fetchEventDetails({ request, params }) {
  const eventId = params.eventId;
  return {
    event: await singleFetch(eventId),
    events: loadEvents(),
  };
}
export async function deleteEvent({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw response;
  }
  return redirect("/events");
}
