import "./Home.css"

function Home()
{
    return <>
    <div className="body">
       <header>
        <div className="title-box">
            <h1>CarbonZero</h1>
            <h4>Quantify. Reduce. Sustain</h4>
        </div>
        </header>
        <div className="cards">
            <div>
                <h2>What is Carbon Footprint?</h2>
                <p className="card-content">
                A carbon footprint is the total amount of greenhouse gases (GHGs) released into the atmosphere due to a person's or organization's actions. It includes emissions from burning fossil fuels for transportation, electricity, and other activities.
                </p>
            </div>
        </div>
        <footer>
            <p>&copy; 2025 CarbonZero. All rights reserved.</p>
        </footer> 
    </div>
    
    </>
}

export default Home;