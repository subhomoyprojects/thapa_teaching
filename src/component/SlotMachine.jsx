import React from "react";
import "./SlotMachine.css";

export const SlotCard = (props) => {
  let { x, y, z } = props;
  return (
    <>
      <div className="slot-box">
        {x === y && y === z ? (
          <h2>
            😲 😲 This is Matching,{" "}
            <strong>
              The Value is {x} {y} {z}
            </strong>
          </h2>
        ) : (
          <h2>
            😢 😢 This is Not Maching,{" "}
            <strong>
              The Value is {x} {y} {z}
            </strong>
          </h2>
        )}
      </div>
    </>
  );
};

function SlotMAchine(props) {
  return (
    <>
      <h1 className="heading-style">
        🎰 Welcome to <strong>slot machine</strong> game 🎰
      </h1>
      <div className="container">
        <SlotCard x="👍" y="👍" z="👍" />
        <SlotCard x="👍" y="👍" z="😄" />
        <SlotCard x="🎅" y="👍" z="😄" />
      </div>
    </>
  );
}

export default SlotMAchine;
