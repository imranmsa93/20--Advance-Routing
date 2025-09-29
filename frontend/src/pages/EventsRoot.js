import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
function EventsRootPage() {
  return (
    <>
        <EventsNavigation />
          <Outlet />
    </>
  );
}

export default EventsRootPage;