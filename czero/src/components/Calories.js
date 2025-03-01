import "./Calculator.css"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import travelData from "./Travel";
import electricityData from "./Electricity";
import setTotalFootprint from "./Calculator";
import data from "./Calculator";


function Calories()
{
        let [caloriesData, setCaloriesData] = useState(0);
        const navigate = useNavigate()
        const [cal, setCal] = useState(0);
        const location = useLocation();
        const setCalories = location.state?.setCalories || (() => {});  
        const [showResults, setShowResults] = useState(false);
    
        function handleInput(event) {
            caloriesData=Number(event.target.value)
            setCal(caloriesData);
        }
    
        function calculateCalories() {
            let monthlyCalories = cal * 30;
            setCal(monthlyCalories)
            setCalories(monthlyCalories);
            alert(`Monthly calorie intake: ${monthlyCalories} kcal`);
            
        }

        function calculateFootprint() {
            let travelFootprint = travelData * 0.25;
            let electricityFootprint = electricityData * 0.5;
            let calorieFootprint = caloriesData * 0.0025;
            let totalFootprint = travelFootprint + electricityFootprint + calorieFootprint;
    
            setTotalFootprint({ ...data, totalFootprint });
            setShowResults(true);
        }
    
        return (
            <div className="calc-calo">
                <h1>Calorie Calculator</h1>
                <label htmlFor="calo">Average Calorie intake: </label>
                <input id="calo" type="number" placeholder="Daily Calorie Intake" onChange={handleInput} />
                <button id="calc" onClick={calculateCalories}>Calculate</button>
                <a  id="calc" href="/calculator">Calculator</a>
            <button className="btn" onClick={calculateFootprint}>Get my footprint!</button>
            </div>
        );
}

export default Calories;