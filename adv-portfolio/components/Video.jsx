import React from 'react'

function Video() {
  return (
    <div id='video' className=' m-0 p-0 bg-cover w-[100%] h-screen bg-center overflow-hidden relative top-0 left-0 flex items-center justify-center'>
        
        <video src='assets/videos/backVideo.mp4' autoPlay loop muted className='w-full h-screen absolute top-0 left-0 scale-150 xl:scale-125' />
        
    
    </div>

  )
}

export default Video