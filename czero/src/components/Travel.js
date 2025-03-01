import React, { useState } from "react";

export function Travel() {
    const [data, setData] = useState({ car: 0, bus: 0, train: 0 });

    function handleInput(event) {
        let { name, value } = event.target;
        setData({ ...data, [name]: Number(value) });
    }

    function calculateTravel() {
        let total = data.car + data.bus + data.train;
        alert(`Total travel distance: ${total} km`);
    }

    return (
        <div>
            <h1>Travel Calculator</h1>
            <input type="number" name="car" placeholder="Car (km)" onChange={handleInput} />
            <input type="number" name="bus" placeholder="Bus (km)" onChange={handleInput} />
            <input type="number" name="train" placeholder="Train (km)" onChange={handleInput} />
            <button onClick={calculateTravel}>Calculate</button>
        </div>
    );
}

export function Electricity() {
    const [bill, setBill] = useState(0);

    function handleInput(event) {
        setBill(Number(event.target.value));
    }

    function calculateElectricity() {
        let consumption = bill / 8;
        alert(`Electricity consumption: ${consumption.toFixed(2)} kWh`);
    }

    return (
        <div>
            <h1>Electricity Calculator</h1>
            <input type="number" placeholder="Electricity Bill ($)" onChange={handleInput} />
            <button onClick={calculateElectricity}>Calculate</button>
        </div>
    );
}

export function Calories() {
    const [cal, setCal] = useState(0);

    function handleInput(event) {
        setCal(Number(event.target.value));
    }

    function calculateCalories() {
        let monthlyCalories = cal * 30;
        alert(`Monthly calorie intake: ${monthlyCalories} kcal`);
    }

    return (
        <div>
            <h1>Calorie Calculator</h1>
            <input type="number" placeholder="Daily Calorie Intake" onChange={handleInput} />
            <button onClick={calculateCalories}>Calculate</button>
        </div>
    );
}
