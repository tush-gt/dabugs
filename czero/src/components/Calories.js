import "./Calculator.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Calories() {
    const [caloriesData, setCaloriesData] = useState(0);
    const [calData, setCalData] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const travelData = location.state?.travel || 0;
    const electricityData = location.state?.electricity || 0;
    
    function handleInput(event) {
        let cal = Number(event.target.value)
        setCaloriesData(cal);
        setCalData(cal);
    }

    function calculateCalories() {
        let monthlyCalories = caloriesData * 30;
        alert(`Monthly calorie intake: ${monthlyCalories} kcal`);
        setCaloriesData(monthlyCalories);
    }

    function calculateFootprint() {
        let travelFootprint = travelData * 0.25;
        let electricityFootprint = electricityData * 0.5;
        let calorieFootprint = caloriesData * 0.0025;
        let totalFootprint = travelFootprint + electricityFootprint + calorieFootprint;
        console.log(totalFootprint);
        alert(`Your total carbon footprint is: ${totalFootprint.toFixed(2)} kg CO2`);
        // navigate("/calculate", { 
        //     state: { 
        //         travel: travelData, 
        //         electricity: electricityData, 
        //         calories: caloriesData, 
        //         totalFootprint 
        //     } 
        // });
    }

    return (
        <div className="calc-calo">
            <h1>Calorie Calculator</h1>
            <label htmlFor="calo">Average Calorie intake: </label>
            <input id="calo" type="number" placeholder="Daily Calorie Intake" onChange={handleInput} />
            <button id="calc" onClick={calculateCalories}>Calculate</button>
            <button className="btn" onClick={calculateFootprint}>Get my footprint!</button>
        </div>
    );
}

export default Calories;
