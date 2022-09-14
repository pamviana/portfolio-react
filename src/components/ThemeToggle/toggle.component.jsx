import React, { useState } from "react";
import "./toggle.styles.css";
import toggleOn from "../../resources/toggle-on.svg";
import toggleOff from "../../resources/toggle-off.svg";
import sun from "../../resources/sun-fill.svg";
import moon from "../../resources/moon-fill.svg";

function ThemeToggle() {
  const [toggleIcon, setToggleIcon] = useState(toggleOn);

  function pressToggle() {
    const toggle = document.querySelector('.toggle-draw');
    toggle.classList.add('move-toggle');
  }

  return (
    <div className="toggle-wrapper" onClick={()=> pressToggle()}>
      <div className="toggle-draw">
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
}

export default ThemeToggle;
