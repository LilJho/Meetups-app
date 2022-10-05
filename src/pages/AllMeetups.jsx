import { React, useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://react-getting-started-63673-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setLoadMeetups(meetups);
        setIsLoading(false);
        console.log(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>...Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className="mb-4 text-4xl font-bold">All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
