import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Calculator.css";
import Calculator from "./Calculator";

export function Travel() {
    let [total, setTotal] = useState(0);
    const [data, setData] = useState({ car: 0, bus: 0, train: 0 });
    const navigate = useNavigate()
    const location = useLocation();
    const setTravel = location.state?.setTravel || (() => {});

    function handleInput(event) {
        let { name, value } = event.target;
        setData({ ...data, [name]: Number(value) });
    }

    function calculateTravel() {
        let finalTravel = data.car + data.bus + data.train;
        setTotal(finalTravel); // Updates state asynchronously
        setTravel(finalTravel); // Pass value to Calculator.js immediately
    
        alert(`Total travel distance: ${finalTravel} km`); // Use finalTravel instead of total
    }

    return (
        <div className="calc-travel">
            <h1>Travel Calculator</h1>
            <label htmlFor="car">Car: </label>
            <input id="car" type="number" name="car" placeholder="Car (km)" onChange={handleInput} />

            <label htmlFor="bus">Bus: </label>
            <input id="bus"  type="number" name="bus" placeholder="Bus (km)" onChange={handleInput} />

            <label htmlFor="train">Train: </label>
            <input id="train"  type="number" name="train" placeholder="Train (km)" onChange={handleInput} />

            <button id="calc" onClick={calculateTravel}>Calculate</button>
            <button onClick={() => navigate("/electricity", { state: location.state })}>Next</button>
        </div>
    );
}

export default Travel;




