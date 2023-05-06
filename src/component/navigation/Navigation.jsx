import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
