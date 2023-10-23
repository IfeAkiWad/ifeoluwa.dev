import React from "react";
import ifeoluwaDev from '../ifeoluwaDev.png'
import Contact from "./Contact";
// import Links from "./Links";

const Landing = () => {
  return (
    <div id="landing">
      <img src={ifeoluwaDev} className="head-shot" alt="headshot" />
      <div>
        <div className ="my-description">
            <h1 className="my-name">Ifeoluwa Akinremi-Wade</h1>
          </div>
          <div>
            <h2 className="soft-engine">Software Engineer</h2>
          </div>
          <div>
            <p className="catchy-headline">Ruby & JavaScript Enthusiast with a Passion for Crafting React Front-Ends</p>
          </div>
          <div id='email'>
            <a href='mailto: ifeoluwa.akinremi.wade@gmail.com'><button>Contact me</button></a>
          </div>
          
      </div>
        {/* <Contact /> */}
      
    </div>
  )
}

export default Landing
