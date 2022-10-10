// import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./redux";
import Contacts from "./views/Contacts";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import HomeReducer from "../src/Home/Home.jsx";
// import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/reduce" element={<Counter />} />
        <Route path="/home" element={<HomeReducer />} />
      </Routes>
    </div>
  );
}

export default App;
