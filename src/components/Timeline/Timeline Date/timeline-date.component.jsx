import React from "react";
import "./timeline-date.styles.css";

function TimelineDate({grid_area, position, date}) {
  return (
    <div className="date-timeline-box" style={{ gridArea: grid_area, justifySelf: position }}>
      <p> {date}</p>
    </div>
  );
}

export default TimelineDate;
