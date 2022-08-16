import React from "react";
import JobBoxes from "./Job Description Boxes/job-boxes.component";
import TimelineDate from "./Timeline Date/timeline-date.component";
import "./timeline.styles.css";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2>Job Timeline</h2>
      <div className="timeline-container">
        <div className="vertical-line"></div>
        <TimelineDate grid_area="2/1/2/1" position="flex-end" date="Jan 2020"/>
        <JobBoxes position="flex-end" text_align="left" grid_area="2/2/2/2"/>
        <TimelineDate grid_area="3/2/3/2" position="flex-start" date="Feb 2017"/>
        <JobBoxes position="flex-start" text_align="right" grid_area="3/1/3/1"/>
        <TimelineDate grid_area="4/1/4/1" position="flex-end" date="Jan 2018"/>
        <JobBoxes position="flex-end" text_align="left" grid_area="4/2/4/2"/>
        <TimelineDate grid_area="5/2/5/2" position="flex-start" date="Nov 2019"/>
        <JobBoxes position="flex-start" text_align="right" grid_area="5/1/5/1"/>
        <TimelineDate grid_area="6/1/6/1" position="flex-end" date="Jan 2022"/>
        <JobBoxes position="flex-end" text_align="left" grid_area="6/2/6/2"/>   
      </div>
    </section>
  );
}

export default Timeline;
