// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Humanoid Robot Project</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/how-it-works">How It Works</Link>
        </li>
        <li>
          <Link to="/benefits-impacts">Benefits and Impacts</Link>
        </li>
        <li>
          <Link to="/risk-safety">Risk and Safety</Link>
        </li>
        <li>
          <Link to="/recent-robots">Recent Robots</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
