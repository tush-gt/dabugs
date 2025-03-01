import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import About from "./components/About";

function App() {
    return (
        <div>
        <About/>
        </div>
    );
}



export default App;
