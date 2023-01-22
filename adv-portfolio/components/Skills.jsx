import Image from 'next/image'
import React from 'react'
import Video from './Video'

function Skills() {
  return (
    <div id='skills' className=' relative flex w-full h-auto md:h-screen  items-center justify-center p-4 my-16'>
      <div className='m-0 p-0  absolute left-0 top-0 flex w-full h-full items-center justify-center overflow-hidden'>
        <video src='assets/videos/backVideo.mp4' alt="/" autoPlay loop muted className='bg-center bg-cover  transform-gpu ' />

      </div>
      <div className='z-[1] relative top- left-0 flex w-full h-fit max-w-[1240px] items-center justify-center '>
        <div className=' absolute left-0 top-0'>
          <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
            &lt;Skills&gt;
          </p>
        </div>
        <div className=' flex max-w-[1240px] w-full h-full py-20 '>
          <div className=' flex justify-center w-full h-full flex-col'>


            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8 py-[20px] '>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/html.png' className=' w-[4rem]' alt="html" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>html</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/css.png' className=' w-[4rem]' alt="css" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>css</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/javascript.png' className=' w-[4rem]' alt="Not found" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>javascript</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/react.png' className=' w-[4rem]' alt="Not found" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>react js</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/nextjs.png' className=' w-[4rem]' alt="Not found" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>next js</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/tailwind.png' className=' w-[4rem]' alt="Not found" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>tailwind css</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/node.png' className=' w-[4rem]' alt="Not found" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>node js</p>
                </div>
              </div>
              <div className=' p-2 w-full h-full py-8 flex items-center justify-around bg-[#15181E]/80 backdrop-blur-md hover:bg-[#252a34] border-[1px] border-gray-500 shadow-md hover:shadow-2xl rounded-lg  ease-in duration-200'>
                <div>
                  <img src='assets/skills/mongo.png' className=' w-[4rem]' alt="Not found" />
                </div>
                <div>
                  <p className=' uppercase font-bold text-md md:text-lg ml-4  text-white'>mongo</p>
                </div>
              </div>
              
              


            </div>

          </div>
        </div>
        <div className=' absolute left-0 bottom-0'>
          <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
            &lt;/Skills&gt;
          </p>
        </div>
      </div>
    </div>


  )
}

export default Skills