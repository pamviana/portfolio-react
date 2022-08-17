import React, { useState } from "react";
import "./header.styles.css";
import menu_hamburguer from "../../resources/menu_hamburguer.svg";
import close_menu from "../../resources/close_menu.svg";
import NavBar from "./NavBar/navBar.component";

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  return (
    <header className="main-header">
      <button
        id="button_hamburguer"
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        {isMenuActive ? (
          <img className="menu-logo" id="logo-hamburguer" alt="hamburguer menu" src={menu_hamburguer} />
        ) : (
          <img className="menu-logo" id="logo-x-close" alt="hamburguer menu open" src={close_menu} />
        )}        
      </button>
      {isMenuActive ? <></> : <NavBar />}
      <div className="hamburguer"></div>
    </header>
  );
}

export default Header;
