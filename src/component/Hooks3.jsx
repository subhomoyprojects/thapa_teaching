import React, { useState } from "react";

function Hooks3(props) {
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);

  let UpdateTime = () => {
    setTime((time = new Date().toLocaleTimeString()));
  };

  setInterval(UpdateTime, 1000);

  //   setInterval(setTime((time = new Date().toLocaleTimeString())), 1000);

  return (
    <div>
      <h1>{ctime}</h1>
    </div>
  );
}

export default Hooks3;
