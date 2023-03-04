import React from "react";

function NetflixImage(props) {
  return (
    <>
      <div className="img-box">
        <img src={props.Imgsrc} alt="" />
      </div>
    </>
  );
}

export default NetflixImage;
