import React from 'react'
import ResumePDF from '../ResumePDF.pdf'
import YoutubeEmbed from "./YoutubeEmbed";
import Goals from './Goals';

const About = () => {
  return (
    <div id='about-container'>
      <a href = {ResumePDF}>
        <button>
          Résumé
        </button>
      </a>
      
      <a href='https://github.com/IfeAkiWad'>
        <button>
          Github
        </button>
      </a>

      <a href='https://www.linkedin.com/in/ifeoluwa-akinremi-wade/'>
        <button>
          LinkedIn
        </button>
      </a>
      <a href = 'https://medium.com/@ifeoluwa-akinremi'>
        <button>
          Blogs
        </button>
      </a><br /><br />

      <h1>About Me</h1>
      
      <p className='about-me'>
      I first encountered the fascinating world of programming during my teenage years when I decided to customize my MySpace page. The HTML and CSS required to personalize my profile quickly became a puzzle I was determined to solve. Little did I know that this initial curiosity would set the stage for my future career. I decided to pursue education in Psychology and nursing, driven by a desire to help others. However, life had a way of leading me back to my hidden passion. It wasn't long before I realized that the logical thinking and problem-solving skills I had developed during my previous endeavors were assets that could be harnessed in the world of technology. This realization prompted me to take a leap of faith and enroll in the Software Engineering program at <a href='https://flatironschool.com/about-us/'>Flatiron School</a>. There, I received in-depth training in Ruby and Javascript web development, which ignited a growing love for React-based front-end development. It was in this moment of full-circle realization that I knew I had found my true calling in software engineering, combining my passion for technology with my dedication to making a positive impact on the world.
      </p>
      <br /><br />
      <Goals />
      <div>
        <YoutubeEmbed  />
      </div>
      <footer> 2023. Coded in Visual Studio Code. Built with React.js and vanilla CSS, deployed with github-pages.</footer>
    </div>
  )
}

export default About
