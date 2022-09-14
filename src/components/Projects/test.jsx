import React from "react";
import './test.css';
import discord from "../../img/project-discord.JPG";
import site from "../../img/project-website.jpg";

function TestCarousel() {

    function nextImg(){
        const carousel = document.querySelector('.carousel');
        carousel.classList.add('moveImg');
    }


  return (
    <section>
      <div className="carousel">
        <img alt="discord" src={discord} className="previous-img"/>
        <img alt="site" src={site} className="center-img"/>
        <img alt="discord" src={discord} className="next-img"/>
        <img alt="site" src={site} />
      </div>
      <button>previous</button>
      <button onClick={() => nextImg()}>next</button>
      <p>Hello</p>
    </section>
  );
}

export default TestCarousel;
