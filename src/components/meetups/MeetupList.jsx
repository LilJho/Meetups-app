import React from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className="p-0 m-0 list-none">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
