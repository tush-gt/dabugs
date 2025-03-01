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
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;