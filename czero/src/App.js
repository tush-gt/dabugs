import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
// import About from "./components/About";
import Signup from './components/Signup/Signup';

function App() {
    return (
        <div>
        <Navbar/>

        </div>
    );
}



export default App;
