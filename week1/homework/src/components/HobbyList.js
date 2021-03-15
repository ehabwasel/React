import React from "react";
import Hobbies from "./Hobbies";
import uuid from "react-uuid";
function HobbyList() {
  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
  return (
    <ul>
      {hobbies.map((hobby) => (
        <Hobbies key={uuid()} hobby={hobby} />
      ))}
    </ul>
  );
}

export default HobbyList;
