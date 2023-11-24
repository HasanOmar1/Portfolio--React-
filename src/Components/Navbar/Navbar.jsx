import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
<nav>
<div className="nav-bar">
    <div className="logo">
        <a  href="#home" id='logo'>HASAN</a>
    </div>
    <div className="info-container">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>       
    </div>
</div>
</nav>
  )
}
