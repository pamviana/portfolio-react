import React, { useState } from "react";
import "./projects.styles.css";
import ProjectCard from "./Project Card/project-card.component";
import arrowLeft from "../../resources/arrow_left.svg";
import arrowRight from "../../resources/arrow_right.svg";

function Projects() {
  const [positions, setPositions] = useState([1,2,3]);

  function nextCard(){
    setPositions([  //1,2,3 => 2,3,1 => 3,1,2 => 1,2,3      
      2,
      3,
      1
    ])
    console.log(positions);
  }

  function previousCard(){
    
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Projects </h2>
        <div className="arrows-container">
        <button onClick={() => {previousCard()}}> <img alt="arrow left" src={arrowLeft}/></button>
        <button onClick={() => {nextCard()}}> <img alt="arrow right" src={arrowRight}/></button>
        </div>
        
        <ul className="project-slider">
          <ProjectCard grid_column={positions[0]} title="Position 1"/>          
          <ProjectCard grid_column={positions[1]} title="Position 2"/>          
          <ProjectCard grid_column={positions[2]} title="Position 3"/>
        </ul>
      </div>
      <div className="center-button">
        <button id="button-more-projects"> Check out more projects</button>
      </div>
    </section>
  );
}

export default Projects;
