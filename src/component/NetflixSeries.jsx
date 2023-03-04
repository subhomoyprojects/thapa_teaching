import React from "react";
import { Card } from "./Card";
import "./NetflixSeries.css";
import Sdata from "./Sdata";

function NetflixSeries(props) {
  return (
    <>
      <div className="card-holder">
        {Sdata.map((val) => {
          return (
            <Card
              key={val.id}
              src={val.imgSrc}
              title={val.title}
              description={val.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default NetflixSeries;
