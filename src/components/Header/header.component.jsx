import React from "react";
import "./header.styles.css";
import logoImg from "../../img/logo.png";
import NavBar from "./NavBar/navBar.component";
import menu_hamburguer from "../../resources/menu_hamburguer.svg";

function Header() {
  return (
    <header className="main-header">
    <button id="button_hamburguer">
    <img alt="hamburguer menu" src={menu_hamburguer}></img>
    </button>
      <div className="hamburguer"></div>      
    </header>
  );
}

export default Header;
