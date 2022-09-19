import React, { useState } from "react";
import "./projects.styles.css";
import ProjectCard from "./Project Card/project-card.component";
import arrowLeft from "../../resources/arrow_left.svg";
import arrowRight from "../../resources/arrow_right.svg";
import projectPic from "../../img/discord-banner.png";
import projectWeb from "../../img/portfolio-banner.jpg";
import dashboardPic from "../../img/dashboard-banner.svg";
import mathPic from "../../img/math-banner.svg";

function Projects() {
  let cardKey = 120;
  const [cards, setCards] = useState([
    {
      title: "Math Scanner Solver",
      picture: mathPic,
      description: "",
      usedTools: "",
      demoLink: "https://youtu.be/zM3XPDBlQP0",
      gitLink: "https://github.com/pamviana/MathScanner"
    },
    {
      title: "Discord Clone",
      picture: projectPic,
      description: "",
      usedTools: "",
      demoLink: "https://discord-clone-project.vercel.app/",
      gitLink: "https://github.com/pamviana/discord-clone"
    },
    {
      title: "TxRx Dashboard",
      picture: dashboardPic,
      description: "",
      usedTools: "",
      demoLink: "",
      gitLink: "https://github.com/pamviana/TxrxDashboard"
    },
    {
      title: "Portfolio Website",
      picture: projectWeb,
      description: "",
      usedTools: "",
      demoLink: "",
      gitLink: ""
    },
  ]);

  function nextCard() {
    const currCards = [...cards];
    const size = currCards.length - 1;
    const firstCard = currCards.shift(0);

    currCards[size] = firstCard;
    setCards(currCards);
  }

  function previousCard() {
    const currCards = [...cards];
    const lastCard = currCards.pop();

    currCards.unshift(lastCard);
    setCards(currCards);
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Projects </h2>
        {/*<div className="arrows-container">
          <button onClick={() => {previousCard();}}> <img alt="arrow left" src={arrowLeft}/></button>
          <button onClick={() => {nextCard()}}> <img alt="arrow right" src={arrowRight}/></button>
  </div>*/}

        <ul className="project-slider">
          <ProjectCard
            title={cards[0].title}
            key={cardKey++}
            cardID="previous-card"
            projectPic={cards[0].picture}
            demoLink={cards[0].demoLink}
            gitLink={cards[0].gitLink}
          />
          <ProjectCard
            title={cards[1].title}
            key={cardKey++}
            cardID="current-card"
            projectPic={cards[1].picture}
            demoLink={cards[1].demoLink}
            gitLink={cards[1].gitLink}
          />
          <ProjectCard
            title={cards[2].title}
            key={cardKey++}
            cardID="next-card"
            projectPic={cards[2].picture}
            demoLink={cards[2].demoLink}
            gitLink={cards[2].gitLink}
          />
          <ProjectCard
            title={cards[3].title}
            key={cardKey++}
            cardID="next-card"
            projectPic={cards[3].picture}
            demoLink={cards[3].demoLink}
            gitLink={cards[3].gitLink}
          />
        </ul>
      </div>
      <div className="center-button">
        <button id="button-more-projects"> Check out more projects</button>
      </div>
    </section>
  );
}

export default Projects;
