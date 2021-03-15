import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);
  function increaseNumber() {
    setCount((number) => number + 1);
  }
  const feedBack = count < 10 ? "kEEP COUNTING ..." : "It's higher than OR EQUAL 10! ";
  return (
    <div className="element">
      <Count count={count} />
      <Button setCount={increaseNumber} />
      <p>{feedBack} </p>
    </div>
  );
};

export default Counter;
