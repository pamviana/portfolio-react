import React, { useEffect, useRef, useState } from "react";
import "./about.styles.css";
import profileImg from "../../img/profile-picture.jpg";
import { useInView } from 'react-intersection-observer';

function About() {
  const {ref: pictureRef, inView: isPictureVisible} = useInView();  
  const {ref: aboutMeRef, inView: isAboutMeVisible} = useInView(); 

  return (
    <section className="about-section">
      
      <div className="about-container">
      
        <div className="about-left-box" ref={aboutMeRef}>
        <h2 id={isAboutMeVisible ? "reveal-title" : "title"}>About me</h2>
          <p id={isAboutMeVisible ? "reveal-description" : "description-text"}>
            I live in Jacksonville, FL, but I am originally from Brazil. I study
            computer science at University of North Florida, and will be
            graduating in May of 2023.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
          <button className="button-read-more" id={isAboutMeVisible ? "button-animated" : "button-before-animation"}> Read More</button>
        </div> 
          <img ref={pictureRef} id={isPictureVisible ? "reveal-picture" : "profile-pic"} alt="myself" src={profileImg}/>
             
      </div>
      
    </section>
  );
}

export default About;
