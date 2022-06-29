import React from "react";
import "./header.styles.css";
import logoImg from "../../img/logo.png";
import NavBar from "./NavBar/navBar.component";

function Header() {
  return (
    <header className="main-header">
      <div className="logo-title">Pam Viana</div>
      <NavBar />
    </header>
  );
}

export default Header;
