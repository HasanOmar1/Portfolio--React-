import React, { useState } from "react";
import "./hero.css";
import "../../assets/cat.jpg";
import { FaArrowUp } from "react-icons/fa";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Form from "../Form/Form";

export default function Hero() {
  const [infoPage, setInfoPage] = useState("about-me");

  function handleOnClick(status) {
    setInfoPage(status);
  }

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

      <div className="button-info-container">
        <button
          className={`about-btn btn-info-styles ${
            infoPage === "about-me" ? "active-btn" : ""
          } `}
          onClick={() => handleOnClick("about-me")}
        >
          About Me
        </button>
        <button
          className={`project-btn btn-info-styles ${
            infoPage === "projects" ? "active-btn" : ""
          }`}
          onClick={() => handleOnClick("projects")}
        >
          Couple of My Projects
        </button>
        <button
          className={`contact-btn btn-info-styles ${
            infoPage === "contact-me" ? "active-btn" : ""
          }`}
          onClick={() => handleOnClick("contact-me")}
        >
          Contact Me
        </button>
      </div>

      <div className="render-page">
        {infoPage === "about-me" ? (
          <About />
        ) : infoPage === "projects" ? (
          <Projects />
        ) : infoPage === "contact-me" ? (
          <Form />
        ) : (
          <About />
        )}
      </div>
      <Footer />
    </main>
  );
}
