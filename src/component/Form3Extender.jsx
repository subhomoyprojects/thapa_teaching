import React from "react";

function Form3Extender(props) {
  return (
    <>
      <li id={props.id}>
        {props.showItem}
        <button
          type="button"
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
}

export default Form3Extender;
