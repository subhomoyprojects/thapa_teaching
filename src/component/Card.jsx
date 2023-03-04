import React from "react";
import NetflixImage from "./NetflixImage";

export function Card(props) {
  return (
    <div className="card-item">
      <div className="card">
        <NetflixImage Imgsrc={props.src} />
        <div className="ditails-box">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href="https://www.youtube.com/watch?v=b7JJCGXlACM&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=21">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}
