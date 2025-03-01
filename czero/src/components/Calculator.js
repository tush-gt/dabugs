import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Calculator.css";

function Calculator() {
    const [travelData, setTravelData] = useState(0);
    const [electricityData, setElectricityData] = useState(0);
    const [caloriesData, setCaloriesData] = useState(0);
    const [totalFootprint, setTotalFootprint] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState({
        car: 0,
        bus: 0,
        train: 0,
        bill: 0,
        cal: 0,
    });

    function handleInput(event) {
        let { name, value } = event.target;
        setData({ ...data, [name]: Number(value) });
    }

    

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="content">
                <div className="carbon-footprint">
                    <p>Calculating your carbon footprint helps you understand your environmental impact and take steps to reduce it.</p>
                    <ul>
                        <li><a href="https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health" target="_blank" rel="noopener noreferrer">Identify areas to reduce emissions</a></li>
                        <li><a href="https://www.who.int/health-topics/air-pollution" target="_blank" rel="noopener noreferrer">Save money on energy and fuel costs</a></li>
                        <li><a href="https://www.who.int/initiatives/healthy-environments-for-healthier-populations" target="_blank" rel="noopener noreferrer">Promote sustainable living habits</a></li>
                        <li><a href="https://www.who.int/health-topics/climate-change" target="_blank" rel="noopener noreferrer">Contribute to a healthier planet</a></li>
                        <li><a href="https://www.who.int/health-topics/environmental-health" target="_blank" rel="noopener noreferrer">Encourage eco-friendly choices</a></li>
                    </ul>
                </div>
            </div>

            <div className="calc-cards">
                <div className="calc-card"> 
                    <h2>Travel</h2>
                    <p>The distance you traveled via different transport contributes to global warming more than you think! Find out!</p>
                    <button onClick={() => navigate("/travel")}>Let's go!</button>
                </div>
                <div className="calc-card">
                    <h2>Electricity</h2>
                    <p>Save electricity, save money! Probably add, “Save Earth” to that! Know how your energy consumption affects the earth!</p>
                    <button onClick={() => navigate("/electricity")}>Let's go!</button>
                </div>
                <div className="calc-card">
                    <h2>Calorie</h2>
                    <p>The food we eat keeps a trace in our carbon footprint. Get your weekly stats now!</p>
                    <button onClick={() => navigate("/calories")}>Let's go!</button>
                </div>
            </div>

            

            <footer>
                <p>&copy; 2025 CarbonZero. All rights reserved.</p>
            </footer> 
        </div>
    );
}

export default Calculator;
