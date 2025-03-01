import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
<<<<<<< Updated upstream
import Calculator from "./components/Calculator";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <Router>  {/* ✅ Only One Router Here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculate" element={<Calculator />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
=======
import Travel from './components/Travel';
import Electricity from './components/Electricity';
import Calories from './components/Calories';

function App() {
    return (
        <div>
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/electricity" element={<Electricity />} />
                <Route path="/calories" element={<Calories />} />
            </Routes>
        </Router>
        </div>
    );
>>>>>>> Stashed changes
}

export default App;

