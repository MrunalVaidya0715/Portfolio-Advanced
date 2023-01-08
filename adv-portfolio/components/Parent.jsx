import Main  from './Main'
import React from 'react'
import About from './About'
import Navbar from './Navbar'

function Parent() {
  return (
    <div className='flex bg-[#191923] w-full h-screen p lg:p-4 ease-in duration-300'>
        <About/>
        <Main/>
        <Navbar/>

        

    </div>
  )
}

export default Parent