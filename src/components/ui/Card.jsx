import React from "react";

function Card(props) {
  return <div className="bg-white rounded-md shadow ">{props.children}</div>;
}

export default Card;
