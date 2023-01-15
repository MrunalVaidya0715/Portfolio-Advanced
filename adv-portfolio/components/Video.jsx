import React from 'react'
import Projects from './Projects'
import Skills from './Skills'

function Video() {
  return (
    <div id='video' className=' m-0 p-0 bg-cover w-[100%] h-screen bg-center overflow-hidden relative top-0 left-0 flex items-center justify-center border-2 border-white'>
        
        <video src='assets/videos/backVideo.mp4' autoPlay loop muted className='w-full h-full absolute top-0 left-0 scale-150 xl:scale-125 border-2 border-white' />
        <Skills/>
    
    </div>

  )
}

export default Video