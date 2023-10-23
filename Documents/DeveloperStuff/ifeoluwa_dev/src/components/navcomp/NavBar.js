import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div id='nav-container'>
        <nav className="top-nav">
            <div className='nav-links'> 
              <Link className="landing-link" to="/ifeoluwa.dev">Ifeoluwa</Link> 
              <Link className="link" to="/about">About Me</Link> 
              <Link className="link" to="/projects">Projects</Link>
            </div>  
            
        </nav>
    </div>
  )
}

export default NavBar
