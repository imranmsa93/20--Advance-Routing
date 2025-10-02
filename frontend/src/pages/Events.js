import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();
  console.log(events);
  return (
    <>
      <Suspense fallback = { <p style={{textAlign:"center"}}>Loading the events data</p> }>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

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
export async function fetchEvents() {
  return {
    events: loadEvents(),
  };
}
