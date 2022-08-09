import React from "react";
import JobBoxes from "./Job Description Boxes/job-boxes.component";
import "./timeline.styles.css";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2>Job Timeline</h2>
      <div className="timeline-container">
        <JobBoxes position="flex-end" />
        <JobBoxes position="flex-start" />
        <JobBoxes position="flex-end" />
        <JobBoxes position="flex-start" />
        <JobBoxes position="flex-end" />
        </div>
    </section>
  );
}

export default Timeline;
