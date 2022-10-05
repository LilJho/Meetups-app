import { useNavigate } from "react-router-dom";
import MeetupForm from "../components/meetups/MeetupForm";

function NewMeetup() {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-63673-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">Add New Meetup</h1>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
