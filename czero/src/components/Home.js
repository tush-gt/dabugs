import "./Home.css"

function Home()
{
    return <>
    <div class="navbar">
        <div class="left-nav">
            <img src="main.png" alt="logo" />
            <h1>CarbonZero</h1>
        </div>
        <div class="right-nav">
            <a href="#">Home</a>
            <a href="#">Calculator</a>
            <a href="#">Reports</a>
            <a href="#">My Profile</a>
        </div>
    </div>
    <header>
        <h1>Welcome to CarbonZero</h1>
        <p>Your journey towards a sustainable future starts here.</p>
    </header>
    <footer>
        <p>&copy; 2023 CarbonZero. All rights reserved.</p>
    </footer>
    </>
}

export default Home;