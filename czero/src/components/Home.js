import "./Home.css"
import Signup from "./Signup/Signup";
import Navbar from "./Navbar";

function Home()
{
    return <>
    <div className="body">
        <Navbar/>
       <Signup/> 
    </div>
    
    </>
}

export default Home;