import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.css";

function Calculator() {
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
        let travelFootprint = (data.car + data.bus + data.train) * 0.25;
        let electricityFootprint = (data.bill / 8) * 0.5;
        let calorieFootprint = data.cal * 30 * 0.0025;
        let totalFootprint = travelFootprint + electricityFootprint + calorieFootprint;

        setData({ ...data, totalFootprint });
        setShowResults(true);
    }

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <div className="content">
            <div class="carbon-footprint">
                <p>Calculating your carbon footprint helps you understand your environmental impact and take steps to reduce it. By tracking your emissions, you can make informed decisions to lead a more sustainable lifestyle.</p>
                <ul>
                    <li><a href="https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health" target="_blank">Identify areas to reduce emissions</a></li>
                    <li><a href="https://www.who.int/health-topics/air-pollution" target="_blank">Save money on energy and fuel costs</a></li>
                    <li><a href="https://www.who.int/initiatives/healthy-environments-for-healthier-populations" target="_blank">Promote sustainable living habits</a></li>
                    <li><a href="https://www.who.int/health-topics/climate-change" target="_blank">Contribute to a healthier planet</a></li>
                    <li><a href="https://www.who.int/health-topics/environmental-health" target="_blank">Encourage eco-friendly choices</a></li>
                </ul>
            </div>
            <br/> <br/>
            </div>
            <div className="cards">
                <div className="card" onClick={() => navigate("/travel")}> 
                    <h2>Travel</h2>
                    <p>The distance you travelled, via different transport, contributes to Global warming more than you think! Find out!</p>
                </div>
                <div className="card" onClick={() => navigate("/electricity")}>
                    <h2>Electricity</h2>
                    <p>Save electricity, save money! Probably add, “Save Earth” to that!
                    Know how your energy consumption affects the earth!</p>
                </div>
                <div className="card" onClick={() => navigate("/calories")}>
                    <h2>Calorie</h2>
                    <p>The food we eat keeps a trace in our carbon footprint. Get your weekly stats now!</p>
                </div>
            </div>
            <button className="btn" onClick={calculateFootprint}>Get my footprint!</button>
            {showResults && (
                <div className="results">
                    <h2>Your Carbon Footprint Data</h2>
                    <p>Travel: {data.car + data.bus + data.train} km</p>
                    <p>Electricity Bill: ${data.bill}</p>
                    <p>Electricity Consumption: {(data.bill / 8).toFixed(2)} kWh</p>
                    <p>Calorie Intake: {data.cal * 30} kcal/month</p>
                    <h3>Total Carbon Footprint: {data.totalFootprint.toFixed(2)} kg CO2</h3>
                </div>
            )}
            <footer>
            <p>&copy; 2025 CarbonZero. All rights reserved.</p>
        </footer> 
        </div>
    );
}

export default Calculator;







// import "./Calculator.css";
// import { useState } from "react";
// function Calculator()
// {

//     let [data, setData] = useState(
//         {
//             car:0,
//             bus:0,
//             train:0
//         }
//     )

//     function handleInput(event)
//     {
//         let {name, value} = event.target;
//         setData(
//             {
//                 ...data,
//                 [name]: value
//             }
//         )
        
//     }

//     function displayOutput()
//     {
//         let car = Number(data.car)
//         let bus = Number(data.bus)
//         let train = Number(data.train)
//         let total = car+bus+train
//         console.log(data);
//         console.log(total);
//     }

//     function handleElec()
//     {
//         let billAmt = Number(document.querySelector("#bill").value)
//         const perkWh = 8
//         let kWh = billAmt/perkWh
//         console.log(kWh)
//     }

//     function handleCalc()
//     {
//         let calAmt = Number(document.querySelector("#cal").value)
//         let calMonth = calAmt*30
//         console.log(calMonth);
//     }

//     function carbonFootprint()
//     {
//         let car = Number(data.car)
//         let bus = Number(data.bus)
//         let train = Number(data.train)
//         let total = car+bus+train
//         console.log(total);
//         let billAmt = Number(document.querySelector("#bill").value)
//         const perkWh = 8
//         let kWh = billAmt/perkWh
//         console.log(kWh)
//         let calAmt = Number(document.querySelector("#cal").value)
//         let calMonth = calAmt*30
//         console.log(calMonth);
//         let carbon = (total*0.25)+(kWh*0.5)+(calMonth*0.0025)
//         console.log(carbon);
//     }

//     return <div className="container">
//         <div id="calc1">
//             <div className="travel">
//                 <h2>Travel</h2>
//                 <label htmlFor="car">Car (kms/month):</label>
//                 <input type="number" name="car" id="car" placeholder="Enter kms" onChange={handleInput}/>
                
//                 <label htmlFor="bus">Bus (kms/month):</label>
//                 <input type="number" name="bus" id="bus" placeholder="Enter kms" onChange={handleInput}/>
                
//                 <label htmlFor="train">Train (kms/month):</label>
//                 <input type="number" name="train" id="train" placeholder="Enter kms" onChange={handleInput}/>

//                 <button className="btn" onClick={displayOutput}>Calculate</button>
//             </div>
//         </div>   

//         <div id="calc2">
//             <div className="electricity">
//                 <h2>Electricity stats</h2>
//                 <label htmlFor="car">Enter your monthly bill:</label>
//                 <input type="number" name="bill" id="bill" placeholder="Enter bill"/>
//                 <button className="btn" onClick={handleElec}>Calculate</button>
//             </div>
//         </div>
        
//         <div id="calc3">
//             <div className="calories">
//                 <h2>Calories</h2>
//                 <label htmlFor="cal">Enter your daily calorie intake:</label>
//                 <input type="number" name="cal" id="cal" placeholder="Avg weekly caloriee intake: "/>
//                 <button className="btn" onClick={handleCalc}>Calculate</button>
//             </div>      
//         </div>
//         <button className="btn" onClick={carbonFootprint}>Get my Carbon Footprint!</button>
//     </div>

// }


// export default Calculator;