import React from "react";
import "./skills.styles.css";

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-big-box">
        <h2>Skills</h2>
        <p><span style={{fontWeight:"400"}}> Some programming languages and tools I have used</span></p>
        <div className="skills-logos">
        
        <img alt="cs3" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        <img alt="html5" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        <img alt="js" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img alt="react" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img alt="mysql" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
        <img alt="java" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        <img alt="github" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        <img alt="python" id="language-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />

        </div>
      </div>
    </section>
  );
}
export default Skills;
