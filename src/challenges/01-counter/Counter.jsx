import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter((prev) => prev - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Challenge 01 - Counter App</h2>

      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
