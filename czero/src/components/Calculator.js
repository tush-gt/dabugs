import "./Calculator.css";

function Calculator()
{
    return <div class="container">
    <h1>Carbon Footprint Calculator</h1>
    <label for="electricity">Electricity Usage (kWh/month):</label>
    <input type="number" id="electricity" placeholder="Enter kWh" />
    
    <label for="fuel">Fuel Consumption (liters/month):</label>
    <input type="number" id="fuel" placeholder="Enter liters"/>
    
    <label for="travel">Miles Traveled (miles/month):</label>
    <input type="number" id="travel" placeholder="Enter miles"/>
    
    <button class="btn" onclick="calculateFootprint()">Calculate</button>
    
    <h2 id="result"></h2>
    </div>

}


export default Calculator;