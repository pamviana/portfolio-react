import React from "react";
import "./job-boxes.styles.css";

function JobBoxes({position, text_align, grid_area, ref_props}) {


  return (
    <div className="job-box-timeline" style={{ justifySelf: position, textAlign: text_align, gridArea: grid_area }}>
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
