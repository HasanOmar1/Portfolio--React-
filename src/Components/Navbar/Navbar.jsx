import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
<nav  className="nav-bar">

    <div className="logo">
    <a  href="#home" id='logo'>HASAN</a>
    </div>
    <input id='menu-toggle' type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
    </label>

    <ul class="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

</nav>
  )
}
