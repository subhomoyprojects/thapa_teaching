import React, { createContext, useState } from "react";
import ComB from "./ComB";
// const NameBox = {
//   fName: "Subhomoy",
//   lName: "Pal",
// };
const ConstApi = createContext();
function ComA(props) {
  const [NameBox] = useState({
    fName: "Subhomoy",
    lName: "Pal",
  });
  return (
    <>
      <ConstApi.Provider value={NameBox}>
        <ComB />
      </ConstApi.Provider>
    </>
  );
}

export default ComA;
export { ConstApi };
