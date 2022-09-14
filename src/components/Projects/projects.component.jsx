import React, { useState } from "react";
import "./projects.styles.css";
import ProjectCard from "./Project Card/project-card.component";
import arrowLeft from "../../resources/arrow_left.svg";
import arrowRight from "../../resources/arrow_right.svg";
import projectPic from "../../img/project-discord.JPG";
import projectWeb from "../../img/project-website.jpg";

function Projects() {
  let cardKey = 120;
  const[cards, setCards] = useState([
    {title: "Position 1",
      picture: projectPic
    }, 
    {title: "Position 2",
    picture: projectWeb
    }, 
    {title: "Position 3",
    picture: projectWeb
    },
    {title: "Position 4",
    picture: projectPic
    }, 
  ])

// let cardCounter = 1;

// const slider = document.querySelector('ul');

// slider.style.transform = 'translateX(' + (-500 * cardCounter) + 'px)';

 function nextCard(){
  const currCards = [...cards];
  const size = currCards.length - 1;
  const firstCard = currCards.shift(0);

  currCards[size] = firstCard;
  setCards(currCards);
 }

 function previousCard(){
  const currCards = [...cards];
  const lastCard = currCards.pop();

  currCards.unshift(lastCard);
  setCards(currCards);
 }

// function moveCardsToRight(){
//   slider.style.transition = "transform 0.4s ease-in-out";
//   cardCounter++;
//   slider.style.transform = 'translateX(' + (-500 * cardCounter) + 'px)';
//  }

//  function moveCardsToLeft(){
//   const elements = document.getElementsByClassName('project-slider');

//     elements[0].classList.remove("move-card-backword");
//     elements[0].classList.add("move-card-backword");
  
//  }
 
//  function moveCardsToRight(){
//   const elements = document.getElementsByClassName('project-slider');
//     elements[0].classList.remove("move-card-forward");
//     elements[0].classList.add("move-card-forward");  
//  }

//  function moveCardsToLeft(){
//   const elements = document.getElementsByClassName('project-slider');

//     elements[0].classList.remove("move-card-backword");
//     elements[0].classList.add("move-card-backword");
  
//  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Projects </h2>
        <div className="arrows-container">
          <button onClick={() => {previousCard();}}> <img alt="arrow left" src={arrowLeft}/></button>
          <button onClick={() => {nextCard()}}> <img alt="arrow right" src={arrowRight}/></button>
        </div>
        
        <ul className="project-slider">
          <ProjectCard title={cards[0].title} key={cardKey++} cardID="previous-card" projectPic={cards[0].picture}/>  
          <ProjectCard title={cards[1].title} key={cardKey++} cardID="current-card" projectPic={cards[1].picture}/> 
          <ProjectCard title={cards[2].title} key={cardKey++} cardID="next-card" projectPic={cards[2].picture}/>        
        </ul>
      </div>
      <div className="center-button">
        <button id="button-more-projects"> Check out more projects</button>
      </div>
    </section>
  );
}

export default Projects;
