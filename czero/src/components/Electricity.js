import "./Calculator.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Electricity() {
    const [bill, setBill] = useState(0);
        const navigate = useNavigate()

    function handleInput(event) {
        setBill(Number(event.target.value));
    }

    function calculateElectricity() {
        let consumption = bill / 8;
        alert(`Electricity consumption: ${consumption.toFixed(2)} kWh`);
        
    }

    return (
        <div className="calc-elec">
            <h1>Electricity Calculator</h1>
            <label htmlFor="elec">Enter your electricity bill: </label>
            <input id="elec" type="number" placeholder="Electricity Bill ($)" onChange={handleInput} />
            <button id="calc" onClick={calculateElectricity}>Calculate</button>
            <a  id="calc" href="/calculator">Calculator</a>
        </div>
    );
}

export default Electricity;