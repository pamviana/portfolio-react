import React from "react";
import './navBar.styles.css'

function NavBar() {
  return (
    <nav className="main_menu">
      <ul>
        <li> Resume </li>
        <li> About Me </li>
        <li> Projects </li>
        <li> Contact Me</li>
      </ul>
    </nav>
  );
}

export default NavBar;
