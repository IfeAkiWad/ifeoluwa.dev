import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/navcomp/NavBar";
import './App.css';

import Landing from "./components/Landing"
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/projects" element={<Projects />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
