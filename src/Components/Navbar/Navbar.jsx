import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <a href="#home" id="logo">
          HASAN
        </a>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>

      <ul className="menu">
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
    </nav>
  );
}
