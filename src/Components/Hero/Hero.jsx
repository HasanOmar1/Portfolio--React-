import React from "react";
import "./hero.css";
import "../../assets/cat.jpg";
import { FaArrowUp } from "react-icons/fa";

export default function Hero() {
  return (
    <main id="home" className="welcome-page">
      <h1 className="welcome-title">
        <span id="welcome-word">WELCOME</span>
        <span id="to-my">TO MY</span>
        <span id="welcome-word">PORTFOLIO</span>
      </h1>
      <div className="avatar"></div>
      <a href="#home" id="go-top">
        <FaArrowUp />
      </a>
    </main>
  );
}
