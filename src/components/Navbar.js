// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <h1>Humanoid Robot Project</h1>
      <h3>Jung, John, Cort, & Steven</h3>
      {/*}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/domestic-labor">Background</Link>
        </li>
        <li>
          <Link to="/benefits-impacts">Benefits and Impacts</Link>
        </li>
        <li>
          <Link to="/recent-robots">Recent Robots</Link>
        </li>
        <li>
          <Link to="/risk-safety">Risk and Safety</Link>
        </li>
        <li>
          <Link to="/future-directions">Future Directions</Link>
        </li>
        <li>
          <Link to="/references">References</Link>
        </li>
      </ul>
      {*/}
    </nav>
  );
}

export default Navbar;
