import React from "react";
import Navigation from "../navigation/Navigation";
import { useNavigate } from "react-router-dom";

function Service(props) {
  const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <h1>Service is working</h1>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
}

export default Service;
