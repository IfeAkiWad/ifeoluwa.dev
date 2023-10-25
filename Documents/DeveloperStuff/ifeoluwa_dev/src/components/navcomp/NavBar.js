import React from 'react'
import { Link } from 'react-router-dom'
import i from '../../i.png'

const NavBar = () => {
  return (
    <div id='nav-container'>
        <nav className="top-nav">
            <div className='nav-links'> 
              <Link className="landing-link" to="/">Ifeoluwa</Link> 
              <Link className="link" to="/projects">Projects</Link>
              <Link className="link" to="/about">About Me</Link> 
            </div>  
            
        </nav>
    </div>
  )
}

export default NavBar
