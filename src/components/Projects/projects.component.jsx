import React from "react";
import "./projects.styles.css";
import ProjectCard from "./Project Card/project-card.component";
import arrowLeft from "../../resources/arrow_left.svg";
import arrowRight from "../../resources/arrow_right.svg";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Projects </h2>
        <div className="arrows-container">
          <button> <img alt="arrow left" src={arrowLeft}/></button>
          <button> <img alt="arrow right" src={arrowRight}/></button>
        </div>
        <ul className="project-slider">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ul>
      </div>
      <div className="center-button">
        <button id="button-more-projects"> Check out more projects</button>
      </div>
    </section>
  );
}

export default Projects;
