import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from './components/Signup/Signup'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <Calculator/> */}
    <Navbar />
    <Home/>
    </>
  )
}

export default App;
