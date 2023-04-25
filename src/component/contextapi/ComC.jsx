import React from "react";
import { ConstApi } from "./ComA";

function ComC(props) {
  return (
    <>
      <ConstApi.Consumer>
        {(fullName) => {
          return (
            <h1>
              My name is {fullName.fName} {fullName.lName}
            </h1>
          );
        }}
      </ConstApi.Consumer>
    </>
  );
}

export default ComC;
