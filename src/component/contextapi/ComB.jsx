import React, { useContext } from "react";
import { ConstApi } from "./ComA";

import ComC from "./ComC";

function ComB(props) {
  // this is a use context hooks
  const fName = useContext(ConstApi);
  return (
    <div>
      <h1>
        My name is {fName.fName} {fName.lName}
      </h1>
      <ComC />
    </div>
  );
}

export default ComB;
