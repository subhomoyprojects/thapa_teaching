import React from "react";
import { useState } from "react";

function Form(props) {
  const [myName, setMyName] = useState({ cName: "" });
  const [outPut, setOutPut] = useState();
  const handelChanger = (e) => {
    const { name, value } = e.target;
    setMyName({ [name]: value });
  };
  const showData = (e) => {
    e.preventDefault();
    setOutPut(myName.cName);
  };
  return (
    <>
      <h1>Hello,{outPut}</h1>
      <form onSubmit={showData}>
        <input
          type="text"
          name="cName"
          value={myName.cName}
          onChange={handelChanger}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
