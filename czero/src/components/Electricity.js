import "./Calculator.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Calories from "./Calories";

function Electricity() {
    const [bill, setBill] = useState(0);
    const navigate = useNavigate()
    const location = useLocation();
    const setElectricity = location.state?.setElectricity || (() => {});

    function handleInput(event) {
        setBill(Number(event.target.value));
    }

    function calculateElectricity() {
        let consumption = bill / 8;
        setElectricity(consumption);
        alert(`Electricity consumption: ${consumption.toFixed(2)} kWh`);
        
    }

    return (
        <div className="calc-elec">
            <h1>Electricity Calculator</h1>
            <label htmlFor="elec">Enter your electricity bill: </label>
            <input id="elec" type="number" placeholder="Electricity Bill ($)" onChange={handleInput} />
            <button id="calc" onClick={calculateElectricity}>Calculate</button>
            <button onClick={() => navigate("/calories", { state: location.state })}>Next</button>
        </div>
    );
}

export default Electricity;