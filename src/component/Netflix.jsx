import React from "react";
import { Card } from "./Card";
import Sdata from "./Sdata";

function Netflix(props) {
  return (
    <div>
      <Card
        key={Sdata[0].id}
        src={Sdata[0].imgSrc}
        title={Sdata[0].title}
        description={Sdata[0].description}
      />
    </div>
  );
}

export default Netflix;
