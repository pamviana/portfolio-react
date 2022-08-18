import React from "react";
import { useInView } from 'react-intersection-observer';
import JobBoxes from "./Job Description Boxes/job-boxes.component";
import TimelineDate from "./Timeline Date/timeline-date.component";
import "./timeline.styles.css";

function Timeline() {
  const {ref: titleRef, inView: isTitleVisible} = useInView();  
  const {ref: verticalLineRef, inView: isVerticalLineVisible} = useInView();
  const {ref: firstRowRef, inView: isFirstRowRefVisible} = useInView();  
  const {ref: secondRowRef, inView: isSecondRowRefVisible} = useInView();
  const {ref: thirdRowRef, inView: isThirdRowRefVisible} = useInView();  
  const {ref: fourthRowRef, inView: isFourthRowRefVisible} = useInView();
  const {ref: fifthRowRef, inView: isFifthRowRefVisible} = useInView();  
  const {ref: sixthRowRef, inView: isSixthRowRefVisible} = useInView();
  const {ref: seventhRowRef, inView: isSeventhRowRefVisible} = useInView();  

  return (
    <section className="timeline-section">
      <h2 ref={titleRef} id={isTitleVisible ? "reveal-title" : "title"}>Job Timeline</h2>
      <div className="timeline-container" ref={secondRowRef}>
        <div ref={verticalLineRef} className="vertical-line"></div>
        <TimelineDate ref={secondRowRef} grid_area="2/1/2/1" position="flex-end" date="Jan 2020" isRowVisible={isSecondRowRefVisible}/> 
        <JobBoxes position="flex-end" text_align="left" grid_area="2/2/2/2" isRowVisible={isSecondRowRefVisible}/>
        <TimelineDate ref={thirdRowRef} grid_area="3/2/3/2" position="flex-start" date="Feb 2017" isRowVisible={isThirdRowRefVisible}/>
        <JobBoxes position="flex-start" text_align="right" grid_area="3/1/3/1" isRowVisible={isThirdRowRefVisible}/>
        <TimelineDate ref={fourthRowRef} grid_area="4/1/4/1" position="flex-end" date="Jan 2018" isRowVisible={isFourthRowRefVisible}/>
        <JobBoxes position="flex-end" text_align="left" grid_area="4/2/4/2" isRowVisible={isFourthRowRefVisible}/>
        <TimelineDate ref={fifthRowRef} grid_area="5/2/5/2" position="flex-start" date="Nov 2019" isRowVisible={isFifthRowRefVisible}/>
        <JobBoxes position="flex-start" text_align="right" grid_area="5/1/5/1" isRowVisible={isFifthRowRefVisible}/>
        <TimelineDate ref={sixthRowRef} grid_area="6/1/6/1" position="flex-end" date="Jan 2022" isRowVisible={isSixthRowRefVisible}/>
        <JobBoxes position="flex-end" text_align="left" grid_area="6/2/6/2" isRowVisible={isSixthRowRefVisible}/>   
      </div>
    </section>
  );
}

export default Timeline;
