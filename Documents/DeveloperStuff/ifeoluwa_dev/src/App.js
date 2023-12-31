import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/navcomp/NavBar";
import './App.css';

import Landing from "./components/Landing"
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        </Router>
        {/* <footer> */}
        {/* <Contact /> */}
        
    </div>
  );
}

export default App;
