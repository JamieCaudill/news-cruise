import React from "react";
import "./App.css";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
// import apiCalls from '../../apiCalls';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
