import React from "react";
import "./job-boxes.styles.css";

function JobBoxes({ position, text_align, grid_area, isRowVisible, description, title}) {
  
  return (
    <div
      className="job-box-timeline"
      style={{
        justifySelf: position,
        textAlign: text_align,
        gridArea: grid_area,
      }}      
      id={isRowVisible ? "reveal-job-box" : text_align === "left" ? "hidden-job-box-right" : "hidden-job-box-left"}
    >
      <h3 className="title-job">{title}</h3>
      <p className="job-description">
        {description} 
      </p>
    </div>
  );
}

export default JobBoxes;
