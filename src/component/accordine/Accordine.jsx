import React, { useState } from "react";
import { AccordineItem } from "./AccordineItem";
import Accordineloop from "./Accordineloop";

function Accordine(props) {
  const [questionItem] = useState(AccordineItem);
  return (
    <div className="container">
      <div className="card">
        <ul className="accordine-holder">
          {questionItem.map((item, index) => {
            const { id } = item;
            return <Accordineloop key={id} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Accordine;
