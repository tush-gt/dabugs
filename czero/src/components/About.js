import React from 'react';
import ReactDOM from 'react-dom';
import './About.css';

const About = () => {
  return (
    <div className="body">
      <header>
        <div className="navbar">
          <div className="title-box">
            <h1>CarbonZero</h1>
            <h4>Quantify. Reduce. Sustain</h4>
          </div>
        </div>
      </header>
      
      <div className="cards-container">
        <div className="cards">
          <div className="card">
            <h2>What is Carbon Footprint?</h2>
            <p className="card-content">
              A carbon footprint is the total amount of greenhouse gases (GHGs) released into the atmosphere due to a person's or organization's actions. It includes emissions from burning fossil fuels for transportation, electricity, and other activities.
            </p>
          </div>
        </div>
        
        <div className="cards">
          <div className="card">
            <h2>Why is it Important?</h2>
            <p className="card-content">
              Reducing your carbon footprint is crucial to mitigating climate change. By being more mindful of your actions, you can reduce harmful emissions and contribute to a healthier planet.
            </p>
          </div>
        </div>
        
        <div className="cards">
          <div className="card">
            <h2>How to Reduce Your Carbon Footprint?</h2>
            <p className="card-content">
              Start by reducing energy consumption, using public transport, opting for renewable energy sources, and being mindful of waste reduction.
            </p>
          </div>
        </div>
        
        <div className="cards">
          <div className="card">
            <h2>Sustainability Goals</h2>
            <p className="card-content">
              Aiming for sustainability means embracing a future where we conserve resources and protect the environment for future generations. It includes measures like adopting eco-friendly practices and supporting green technologies.
            </p>
          </div>
        </div>
      </div>
      
      <footer>
        <p>&copy; 2025 CarbonZero. All rights reserved.</p>
      </footer>
    </div>
  );
};



export default About;