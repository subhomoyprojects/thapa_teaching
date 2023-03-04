import React from "react";
import { Card } from "./Card";
import Sdata from "./Sdata";

function Amozen(props) {
  return (
    <div>
      <Card
        key={Sdata[1].id}
        src={Sdata[1].imgSrc}
        title={Sdata[1].title}
        description={Sdata[1].description}
      />
    </div>
  );
}

export default Amozen;
