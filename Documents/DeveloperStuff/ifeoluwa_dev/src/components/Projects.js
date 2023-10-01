import React from 'react'
// import Video from './Video'

const Projects = () => {
  return (
    <div id='project-container'>
      {/* <h1>Hello projects</h1> */}
        <div id='video-container'>
          <h2>Flatiron School Projects</h2>
          <p>The top being my final project, you can see how my skills improved throughout the program, and how my enthusiasm towards frontend development began to spark.</p>
            <video src="https://drive.google.com/uc?id=1sqSm5zWrQfPNJf5_KW6aDHTJ52dWAu2r" controls>
            </video>
            <video src='https://drive.google.com/uc?id=1nchhq59P-5-VlUCa4AxyVvx-7PX_nJUI' controls>
            </video>
            <video src='https://drive.google.com/uc?id=19xte8HNSgj6EQbPUXmk21IWhuNL-l73k' controls>
            </video>
        </div>
    </div>
  )
}

export default Projects
