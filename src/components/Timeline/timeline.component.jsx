import React from "react";
import JobBoxes from "./Job Description Boxes/job-boxes.component";
import "./timeline.styles.css";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2>Job Timeline</h2>
      <div className="timeline-container">
        <div className="vertical-line"></div>
        <div className="timeline-boxes-left timeline-division">
          <JobBoxes position="flex-start" text_align="right" />
          <JobBoxes position="flex-start" text_align="right" />
        </div>
        <div className="timeline-boxes-right timeline-division">
          <JobBoxes position="flex-end" text_align="left" />
          <JobBoxes position="flex-end" text_align="left" />
          <JobBoxes position="flex-end" text_align="left" />
        </div>
      </div>
    </section>
  );
}

export default Timeline;
