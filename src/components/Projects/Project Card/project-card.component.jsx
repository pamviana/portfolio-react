import React from "react";
import "./project-card.styles.css";
import projectPic from "../../../img/project-discord.JPG";

function ProjectCard({grid_column, title}) {
  return (
    <li className="project-card-section" style={{gridColumn: grid_column}}>
      <div className="project-card-container">
        <div className="thumb-box">
          <img
            id="project-thumb"
            alt="project thumbnail"
            src={projectPic}
          ></img>
        </div>
        <div className="project-card-texts">
          <h3>{title}</h3>
          <p id="project-description">
            Project Description Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <br />
            <a href="www.google.com">Learn More </a>
          </p>

          <p className="list-tools">
            JavaScript - HTML - CSS - React - Supabase
          </p>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
