import React from "react";

const Joke = ({ joke }) => {
  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default Joke;
