import React from "react";
import "./project-card.styles.css";

function ProjectCard({ grid_column, title, cardID, projectPic, demoLink, gitLink, usedTools }) {
  return (
    <li
      className="project-card-section"
      style={{ gridColumn: grid_column }}
      id={cardID}
    >
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
          </p>

          <p className="list-tools">
            {usedTools}
          </p>
          <div className="button-project-wrap">
            <button className="project-button"><a href={demoLink}>Demo</a></button>
            <button className="project-button"><a href={gitLink}>GitHub Repo</a></button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
