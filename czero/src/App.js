import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Calculator from "./components/Calculator";
import Signup from "./components/Signup/Signup";
import Travel from "./components/Travel";
import Electricity from "./components/Electricity";
import Calories from "./components/Calories";
import Profile from "./components/profile/Profile";
import Developer from "./components/Developer";

function App() {
  return (
    <Router>  {/* ✅ Only One Router Here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculate" element={<Calculator />} /> 
        <Route path="/travel" element={<Travel />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;