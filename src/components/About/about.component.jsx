import React from "react";
import "./about.styles.css";
import profileImg from "../../img/profile-picture.jpg";
import flower1 from "../../img/flower1.svg"
function About() {
  return (
    <section className="about-section">
      
      <div className="about-container">
      
        <div className="about-left-box">
        <h2>About me</h2>
          <p>
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
          <button id="button-read-more"> Read More</button>
        </div>

        <img alt="myself" src={profileImg}></img>      
      </div>
      
    </section>
  );
}

export default About;
