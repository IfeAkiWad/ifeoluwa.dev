import React from 'react'
import HairxImage from '../HairxImage.png'
import Durante from '../Durante.png'

const Projects = () => {
  return (
    <div id='project-container'>
      {/* <h1>Hello projects</h1> */}
      <section className='Flatiron'>
        <h2 className='project-video-heading'>Flatiron School Projects</h2>
        <p className='project-video-description'>The first video being my final project, and the third being  the first I've ever built; <br />you can see how my skills improved throughout the program, <br />and how my enthusiasm towards frontend development began to spark.</p>
        <div id='video-container'>
            <video src="https://drive.google.com/uc?id=1sqSm5zWrQfPNJf5_KW6aDHTJ52dWAu2r" controls>
            </video>
            <p className='video-skill-description' id='one'><strong>Skills</strong>: 
              <ul>
                <li>JavaScript: Fetch, Async</li>
                <li>Redux: State Management</li>
                <li>React Router: Client-Side Navigation</li>
                <li>React: User Interface</li>
                <li>RESTful Routing: Routing Principles</li>
                <li>Rails API: Data Persistence</li>
              </ul>
            </p>
            <video src='https://drive.google.com/uc?id=1nchhq59P-5-VlUCa4AxyVvx-7PX_nJUI' controls>
            </video>
            <p className='video-skill-description' id='two'><strong>Skills</strong>: 
              <ul>
                <li>JavaScript SPA: Single Page Application</li>
                <li>Rails API: API Generation</li>
                <li>JSON Translation: Model Objects</li>
                <li>RESTful Routing: Routing Principles</li>
                <li>DOM Manipulation: Event Handling</li>
                <li>CSS Design: User Experience</li>
              </ul>
            </p>
            <video src='https://drive.google.com/uc?id=19xte8HNSgj6EQbPUXmk21IWhuNL-l73k' controls>
            </video>
            <p className='video-skill-description' id='three'><strong>Skills</strong>: 
              <ul>
                <li>Rails MVC: Framework Construction</li>
                <li>RESTful API: Schema Creation</li>
                <li>CRUD Functionality: Controller Implementation</li>
                <li>Google OAuth: User Authentication</li>
              </ul>
            </p>
        </div>
      </section>
      <section className='post-Flatiron'>
        <h2 className='personal-team-projects-heading'>Post-Flatiron School Projects</h2>
        <p className='personal-team-project-description'>These are projects I embarked on after graduating the Flatiron School Software Engineering program.<br />(from right to left, oldest to recent) The very first project (<a href='https://github.com/chingu-voyages/v38-toucans-team-01be'>Durante</a>) I immersed myself in, entailed working on a production team remotely. <br />My most recent and current project (<a href='https://github.com/IfeAkiWad/HaiRx_FE/tree/main'>HaiRx</a>) is a mock haircare web app that  will feature hair product subscription.</p>
        <div id='personal-team-projects-container'>
          <img src={HairxImage} className='HaiRx-image' alt='hair webapp image'/>
          <img src={Durante} className='durante-image' alt='durante web app image'/>
        </div>
      </section>   
      <footer> 2023. Coded in Visual Studio Code. Built with React.js and vanilla CSS, deployed with github-pages.</footer>
    </div>
  )
}

export default Projects
