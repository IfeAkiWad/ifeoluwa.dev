import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/navcomp/NavBar";
import './App.css';

import Landing from "./components/Landing"
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
       
      <header className="App-header">
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </Router>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
