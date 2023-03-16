import React, { useState } from "react";

function Hooks1(props) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const dicrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={dicrement}>
        Dicrement
      </button>
    </div>
  );
}

export default Hooks1;
