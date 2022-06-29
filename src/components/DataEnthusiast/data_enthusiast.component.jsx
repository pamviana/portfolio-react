import React from "react";
import "./data_enthusiast.styles.css";
import dashboardImg from "../../img/dashboard.png";

function DataEnthusiast() {
  return (
    <section className="data-section">
      <div className="data-container">
        <img alt="dashboard" src={dashboardImg} />
        <div className="data-right-box">
          <h2>I'm a Data Science Enthusiast</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <button className="button-square" id="button-data">Check Some Analysis</button>
        </div>
      </div>
    </section>
  );
}

export default DataEnthusiast;
