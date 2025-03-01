import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from './components/Signup/Signup'

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
        </Router>
  )
}

export default App;
