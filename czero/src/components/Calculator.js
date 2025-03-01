import "./Calculator.css";
import { useState } from "react";
function Calculator()
{

    let [data, setData] = useState(
        {
            car:0,
            bus:0,
            train:0
        }
    )

    function handleInput(event)
    {
        let {name, value} = event.target;
        setData(
            {
                ...data,
                [name]: value
            }
        )
        
    }

    function displayOutput()
    {
        let car = Number(data.car)
        let bus = Number(data.bus)
        let train = Number(data.train)
        let total = car+bus+train
        console.log(data);
        console.log(total);
    }

    function handleElec()
    {
        let billAmt = Number(document.querySelector("#bill").value)
        const perkWh = 8
        let kWh = billAmt/perkWh
        console.log(kWh)
    }

    function handleCalc()
    {
        let calAmt = Number(document.querySelector("#cal").value)
        let calMonth = calAmt*30
        console.log(calMonth);
    }

    return <div className="container">
        <div id="calc1">
            <div className="travel">
                <h2>Travel</h2>
                <label htmlFor="car">Car (miles/month):</label>
                <input type="number" name="car" id="car" placeholder="Enter kms" onChange={handleInput}/>
                
                <label htmlFor="bus">Bus (miles/month):</label>
                <input type="number" name="bus" id="bus" placeholder="Enter kms" onChange={handleInput}/>
                
                <label htmlFor="train">Train (miles/month):</label>
                <input type="number" name="train" id="train" placeholder="Enter kms" onChange={handleInput}/>

                <button className="btn" onClick={displayOutput}>Calculate</button>
            </div>
        </div>   

        <div id="calc2">
            <div className="electricity">
                <h2>Electricity stats</h2>
                <label htmlFor="car">Enter your monthly bill:</label>
                <input type="number" name="bill" id="bill" placeholder="Enter bill"/>
                <button className="btn" onClick={handleElec}>Calculate</button>
            </div>
        </div>
        
        <div id="calc3">
            <div className="calories">
                <h2>Calories</h2>
                <label htmlFor="cal">Enter your daily calorie intake:</label>
                <input type="number" name="cal" id="cal" placeholder="Avg weekly caloriee intake: "/>
                <button className="btn" onClick={handleCalc}>Calculate</button>
            </div>      
        </div>
    </div>

}


export default Calculator;