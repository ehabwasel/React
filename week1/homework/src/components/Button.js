import React from "react";

const Button = ({ setCount }) => {
  return (
    <div>
      <button onClick={setCount}>Add 1 !</button>
    </div>
  );
};

export default Button;
