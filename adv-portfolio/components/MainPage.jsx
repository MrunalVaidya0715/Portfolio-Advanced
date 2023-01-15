import React from 'react'
import Banner from './Banner'
import Skills from './Skills'
import Video from './Video'
/*#171923*/
function MainPage() {
  return (
    <div className='relative w-full h-screen bg-cover  bg-center bg-fixed bg-[#0D0E12] scrollbar-hide overflow-y-auto' >
      <div className='z-[0] fixed top-0 left-0 w-full h-full ]'>

      </div>
      <Banner />

      <Video />
      <Video/>
      <Video/>








    </div>
  )
}


export default MainPage