import React from "react";
import "./job-boxes.styles.css";

function JobBoxes(props) {

  const position = props.position;

  return (
    <div className="job-box-timeline" style={{ alignSelf: position }}>
      <h3 className="title-job">Job Title, Company Name</h3>
      <p className="job-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </p>
    </div>
  );
}

export default JobBoxes;
