import "./Home.css"
import Signup from "./Signup/Signup";
import Navbar from "./Navbar";

function Home()
{
    return <>
     <div className="home-body">
       <div className="home-header">
            <div className="home-title-box">
                <h1>CarbonZero</h1>
                <h4>Quantify. Reduce. Sustain</h4>
            </div>
        </div>
        <div className="home-footer">
            <p>&copy; 2025 CarbonZero. All rights reserved.</p>
        </div> 

    </div>
    </>
}

export default Home;