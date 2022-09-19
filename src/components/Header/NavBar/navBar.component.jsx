import React from "react";
import './navBar.styles.css'
import resume from '../../../resources/PamResume.pdf';

function NavBar() {
  return (
    <nav className="main_menu">
      <ul>
        <li><a alt="resume" href={resume}> Resume </a></li>
        <li> About Me </li>
        <li> Projects </li>
        <li> Contact Me</li>
      </ul>
    </nav>
  );
}

export default NavBar;
