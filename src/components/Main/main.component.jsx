import React from "react";
import "./main.styles.css";
import backgroundImg from "../../img/background.svg";

function Main() {
  return (
    <section className="welcome-section">
    <img id="welcome-background" alt="background with roses" src={backgroundImg}/>
      <div className="main-container">
        <div className="main-title">
          <h1>
            <span style={{ fontSize: "100px", fontWeight: "400" }}>
              Oh, hello!
            </span>{" "}
            <br /> My name is Pamella, <br />
            but you can call me{" "}
            <span
              style={{
                fontFamily: "'Shadows Into Light Two', cursive",
                fontSize: "60px",
                fontWeight: "600",
                color: "var(--dark-pink)",
              }}
            >
              Pam
            </span>
          </h1>
          <p>
            I am a computer science student, and here you can learn more about
            me
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
