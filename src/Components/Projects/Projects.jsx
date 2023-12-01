import React from "react";
import "./projects.css";
import Cards from "../Cards/Cards";
import cardsArray from "./cards";

export default function Projects() {
  return (
    <section id="projects" className="my-projects">
      <h1>Projects</h1>
      <div className="cards">
        {cardsArray.map((cards, i) => {
          return (
            <Cards
              key={i}
              title={cards.title}
              img={cards.img}
              description={cards.description}
              site={cards.site}
              github={cards.github}
            />
          );
        })}
      </div>
    </section>
  );
}
