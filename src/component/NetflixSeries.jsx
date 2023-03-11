import React from "react";
import Amozen from "./Amozen";
import Netflix from "./Netflix";
import "./NetflixSeries.css";

let series = "amazon";
// let Favorit = () => {
//   if (series === "netflix") {
//     return <Netflix />;
//   } else {
//     return <Amozen />;
//   }
// };
function NetflixSeries(props) {
  return (
    <>
      <div className="card-holder">
        {series === "netflix" ? <Netflix /> : <Amozen />}
      </div>
    </>
  );
}

export default NetflixSeries;
