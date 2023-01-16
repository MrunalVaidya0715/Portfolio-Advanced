import Image from 'next/image'
import React from 'react'
import Video from './Video'

function Skills() {
  return (
    <div id='skills' className=' relative'>
      <div className='m-0 p-0  absolute left-0 top-0 flex w-full h-full items-center justify-center overflow-hidden'>
        <video src='assets/videos/backVideo.mp4' alt="/" autoPlay loop muted className='bg-center bg-cover  scale-150 transform-gpu ' />

      </div>
    <div className=' z-[90] max-w-[1240px] w-full md:h-screen m-auto p-4 relative top-0 left-0 overflow-hidden  '>
      
      <div className=' relative flex justify-center w-full h-full flex-col'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          &lt;Skills&gt;
        </p>

        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8 py-[20px] '>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[1rem] ease-in duration-200'>
            <img src='assets/skills/html.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>HTML</p>
            </div>
          </div>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/css.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white '>CSS</p>
            </div>
          </div>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/javascript.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>JAVASCRIPT</p>
            </div>
          </div>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/react.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>REACT JS</p>
            </div>
          </div>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/nextjs.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>NEXT JS</p>
            </div>
          </div>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/tailwind.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>TAILWIND CSS</p>
            </div>
          </div>
          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/node.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>NODE JS</p>
            </div>
          </div>

          <div className='flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md  hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg p-[2rem] ease-in duration-200'>
            <img src='assets/skills/mongo.png' width="65" height="50" alt="Not found" />
            <div>
              <p className='font-bold text-xl ml-4  text-white'>MONGO DB</p>
            </div>
          </div>







        </div>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          &lt;/Skills&gt;
        </p>
      </div>
    </div>
    </div>


  )
}

export default Skills