import React from "react";
import "./timeline-date.styles.css";

const TimelineDate = React.forwardRef(({grid_area, position, date, isRowVisible}, ref) => {
  return (
    <div className="date-timeline-box" style={{ gridArea: grid_area, justifySelf: position }} ref={ref}>
      <p id={isRowVisible ? "reveal-timeline-date" : "timeline-date"}> {date}</p>
    </div>
  );
});

export default TimelineDate;
