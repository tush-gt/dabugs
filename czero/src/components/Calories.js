import "./Calculator.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calories()
{
        const navigate = useNavigate()
        const [cal, setCal] = useState(0);
    
        function handleInput(event) {
            setCal(Number(event.target.value));
        }
    
        function calculateCalories() {
            let monthlyCalories = cal * 30;
            alert(`Monthly calorie intake: ${monthlyCalories} kcal`);
            return monthlyCalories
        }
    
        return (
            <div className="calc-calo">
                <h1>Calorie Calculator</h1>
                <label htmlFor="calo">Average Calorie intake: </label>
                <input id="calo" type="number" placeholder="Daily Calorie Intake" onChange={handleInput} />
                <button id="calc" onClick={calculateCalories}>Calculate</button>
                <a  id="calc" href="/calculator">Calculator</a>

            </div>
        );
}

export default Calories;