import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
<nav>
<div className="nav-bar">
    <div className="logo">
        <a id='logo'>HASAN</a>
    </div>
    <div className="info-container">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>       
    </div>
</div>
</nav>
  )
}
