import React from "react";
import Amozen from "./Amozen";
import Netflix from "./Netflix";
import "./NetflixSeries.css";

let Favorit = () => {
  let series = "netflix";
  if (series === "netflix") {
    return <Netflix />;
  } else {
    return <Amozen />;
  }
};
function NetflixSeries(props) {
  return (
    <>
      <div className="card-holder">
        <Favorit />
      </div>
    </>
  );
}

export default NetflixSeries;
