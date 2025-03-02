import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.css";

function Calculator() {
    const [travelData, setTravelData] = useState(0);
    const [electricityData, setElectricityData] = useState(0);
    const [caloriesData, setCaloriesData] = useState(0);
    const [totalFootprint, setTotalFootprint] = useState(0);
    const navigate = useNavigate();
    const [data, setData] = useState({
        car: 0,
        bus: 0,
        train: 0,
        bill: 0,
        cal: 0,
    });
    const [showResults, setShowResults] = useState(false);

    function handleInput(event) {
        let { name, value } = event.target;
        setData({ ...data, [name]: Number(value) });
    }

    function calculateFootprint() {
        // Compute values directly from `data` instead of waiting for state updates
        let travelFootprint = (data.car + data.bus + data.train) * 0.25;
        let electricityFootprint = data.bill * 0.5;
        let calorieFootprint = data.cal * 0.0025;
        let total = travelFootprint + electricityFootprint + calorieFootprint;
    
        // Log values to console
        console.log("Travel Data:", (data.car + data.bus + data.train));
        console.log("Electricity Data:", data.bill);
        console.log("Calorie Data:", data.cal);
        console.log("Travel Footprint:", travelFootprint);
        console.log("Electricity Footprint:", electricityFootprint);
        console.log("Calorie Footprint:", calorieFootprint);
        console.log("Total Carbon Footprint:", total);
    
        // Update state after calculating
        setTravelData(data.car + data.bus + data.train);
        setElectricityData(data.bill);
        setCaloriesData(data.cal);
        setTotalFootprint(total);
    
        // Show alert with total footprint value
        alert(`Your total carbon footprint is: ${total.toFixed(2)} kg CO2`);
        setShowResults(true); // Ensure results are shown
    }
    
    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
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

            {showResults && (
                <div className="results">
                    <h2>Your Carbon Footprint Data</h2>
                    <p>Travel: {travelData} km</p>
                    <p>Electricity Bill: ${electricityData * 8}</p>
                    <p>Electricity Consumption: {electricityData.toFixed(2)} kWh</p>
                    <p>Calorie Intake: {caloriesData} kcal/month</p>
                    <h3>Total Carbon Footprint: {totalFootprint.toFixed(2)} kg CO2</h3>
                </div>
            )}
        </div>
    );
}

export default Calculator;
