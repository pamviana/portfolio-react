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
        <TimelineDate ref={secondRowRef} grid_area="2/1/2/1" position="flex-end" date="Jan 2013" isRowVisible={isSecondRowRefVisible}/> 
        <JobBoxes position="flex-end" text_align="left" grid_area="2/2/2/2" isRowVisible={isSecondRowRefVisible}
        title="Founder and Creator, SmartCases"
        description="Managed all aspects of the company – marketed products, negotiated sales price,
        purchased products based off of demand forecast, and managed logistical needs."/>
        <TimelineDate ref={thirdRowRef} grid_area="3/2/3/2" position="flex-start" date="Dec 2016" isRowVisible={isThirdRowRefVisible}/>
        <JobBoxes position="flex-start" text_align="right" grid_area="3/1/3/1" isRowVisible={isThirdRowRefVisible}
        title="Quality Intern, UFABC jr."
        description="Received 1st place in Quality R&D project by creating a database management
        platform to categorize current project’s needs to relevant solution based on past
        project’s duration, costs, team performance, final results, etc., thus significantly
        increasing the possibility of correct decision making and turnaround."/>
        <TimelineDate ref={fourthRowRef} grid_area="4/1/4/1" position="flex-end" date="Sep 2018" isRowVisible={isFourthRowRefVisible}/>
        <JobBoxes position="flex-end" text_align="left" grid_area="4/2/4/2" isRowVisible={isFourthRowRefVisible}
        title="Business Development Intern, Guide Investimentos"
        description="Provided administrative support and account troubleshooting to
        stockbrokers' agents, including but not limited to contractual
        issues, resolving account holds, system errors, etc.
        Delegated daily tasks to appropriate team member(s) based on
        clients’ needs.
        Investigated and immediately resolved registration issues that
        prevented companies from investing."/>
        <TimelineDate ref={fifthRowRef} grid_area="5/2/5/2" position="flex-start" date="Jan 2022" isRowVisible={isFifthRowRefVisible}/>
        <JobBoxes position="flex-start" text_align="right" grid_area="5/1/5/1" isRowVisible={isFifthRowRefVisible}
        title="Web Development Intern, TxRx Data"
        description="Developed and designed a dashboard platform to display OTT
        (Over-The-Top) analysis in JavaScript(ES6) and React a webbased.
        Interacted with MongoDB using Express.JS.
        Developed and designed the company's website
        www.txrxdata.com;"/>
        <TimelineDate ref={sixthRowRef} grid_area="6/1/6/1" position="flex-end" date="May 2022" isRowVisible={isSixthRowRefVisible}/>
        <JobBoxes position="flex-end" text_align="left" grid_area="6/2/6/2" isRowVisible={isSixthRowRefVisible}
        title="Software Engineer Intern, Beeline"
        description="Convert SQL Server stored procedures into C#, focusing on
        high performance while developing in a legacy system.
        Manipulate and validated data retrieved from a relational
        database using an in-house ORM tool.
        Develop REST APIs using ASP.NET Web API to replace
        processes of importing client data using spreadsheets.
        Contribute to unit testing using Moq, and API testing using
        Postman and Swagger."/>   
      </div>
    </section>
  );
}

export default Timeline;
