import React, { useState } from "react";

function Accordineloop({ question, answer }) {
  const [show, setShow] = useState(false);
  const showHide = () => {
    setShow(() => !show);
  };
  return (
    <li>
      <h3>
        <button type="button" onClick={showHide}>
          {show ? "➖" : "➕"}
        </button>
        {question}
      </h3>
      {show ? <p>{answer}</p> : <p></p>}
    </li>
  );
}

export default Accordineloop;
