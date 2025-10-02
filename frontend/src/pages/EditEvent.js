import EventForm from "../components/EventForm";
import { useRouteLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
function EditEventPage() {
  const {event}  = useRouteLoaderData("event-detail");
  console.log("EditEventPage ", event);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading the events data</p>} >
      <Await resolve={event}>
        {(loadEvent) => <EventForm event={event} method="PATCH" />}
      </Await>
    </Suspense>
  );
}

export default EditEventPage;
