import React from "react";
import Navigation from "../navigation/Navigation";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Service(props) {
  const navigate = useNavigate();
  const { fname, lname } = useParams();
  const location = useLocation();
  return (
    <>
      <Navigation />
      <h1>
        My name is {fname} {lname}
      </h1>

      <h2>
        Current location is {location.pathname}
        {location.pathname === `/service/subhomoy/pal` ? (
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        ) : null}
      </h2>
    </>
  );
}

export default Service;
