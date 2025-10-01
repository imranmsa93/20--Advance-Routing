import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";
function NewEventPage() {
  return (
    <EventForm />
  );
}
export default NewEventPage;

export async function formAction({request, params}) {
  const formParam = await request.formData();
  const eventData = {
    title: formParam.get('title'),
    image: formParam.get('image'),
    date: formParam.get('date'),
    description: formParam.get('description')
  }
  console.log("formAction ", eventData);
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  if (!response.ok) {
    throw response;
  }
  return redirect('/events');
  
}
