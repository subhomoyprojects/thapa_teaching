import React, { useState } from "react";

function Hooks2(props) {
  const currentDate = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentDate);
  const getTime = () => {
    let currentDate = new Date().toLocaleTimeString();
    setTime(currentDate);
  };
  return (
    <div>
      <h1>Time: {time}</h1>
      <button type="button" onClick={getTime}>
        Get Time
      </button>
    </div>
  );
}

export default Hooks2;
