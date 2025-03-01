import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home-body-hom">
        <div className="home-header-hom">
          <div className="home-title-box-hom">
            <h1>CarbonZero</h1>
            <h4>Quantify. Reduce. Sustain</h4>
          </div>
        </div>

        <div className="bannerphoto-hom"></div>

        <div className="home-container-hom">
          <div className="container1-hom">
            <div className="services-icon">
              <Link to="/calculate">
                <i className="fa-solid fa-hospital"></i>
              </Link>
            </div>
            <h3>Track Your FootPrint</h3>
            <p>Calculate the total Monthly Carbon Emission by your Habits!!</p>
          </div>

          <div className="container1-hom">
            <div className="services-icon">
              <Link to="/about">
                <i className="fa-solid fa-handshake"></i>
              </Link>
            </div>
            <h3>Know More About Carbon FootPrint</h3>
            <p>Know how a small habit can impact the carbon emission rate!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
