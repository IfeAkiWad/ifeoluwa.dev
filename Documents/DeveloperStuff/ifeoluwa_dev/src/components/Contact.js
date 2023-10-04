import React from 'react'
import Github from '../Github.png'
import Linkedin from '../Linkedin.png'

const Contact = () => {
  return (
    <div id='contact-container'>
      <ul>
        <li className='github-icon'>
            <a href='https://github.com/IfeAkiWad'>
                <img className='icon-1' src={Github} alt='Github'/>
            </a>
        </li>
        <li className='linkedin-icon'>
            <a href='https://www.linkedin.com/in/ifeoluwa-akinremi-wade/'>
                <img className='icon-2' src={Linkedin} alt='LinkedIn'/>
            </a>
        </li>
        <li className='email-icon'>
            <a href=''>
                <img className='icon-3'  />
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
