import React from 'react'
import Video from './Video'

function Projects() {
    return (
        <div id='projects' className=' relative flex w-full h-auto md:h-screen  items-center justify-center p-4 my-16'>
            <div className='m-0 p-0  absolute left-0 top-0 flex w-full h-full items-center justify-center overflow-hidden'>
                <img src='assets/svg/product-lines-bg.svg' alt="/" className='bg-center bg-cover ' /> 
                
            </div>
            <div className='z-[1] relative top-0 left-0 flex w-full h-fit max-w-[1240px] items-center justify-center '>
                <div className=' absolute left-0 top-0'>
                    <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
                        &lt;Projects&gt;
                    </p>
                </div>
                <div className=' flex max-w-[1240px] w-full h-full py-20 '>
                    <div className=' w-full h-full flex  items-center justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4  '>

                            <div className='relative flex items-center justify-center p-8 h-auto  w-full  border-[1px] border-gray-500 bg-gray-900/90 backdrop-blur-sm shadow-gray-900 rounded-2xl  group hover:bg-gray-900/90 ' >
                                <img className=' rounded-lg group-hover:opacity-10 group-hover:backdrop-blur-2xl ' src='assets/projects/crypto.jpg' alt='/' />
                                <div className='hidden z-[1000] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{/*Overlay */}
                                    <h3 className='text-2xl text-white tracking-widest text-center'>Crypto</h3>
                                    <p className='text-center pb-4 pt-2 text-white'>React JS</p>
                                    <a href='/'>
                                        <p className='text-center py-3 p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:opacity-[0.7]'>More info</p>
                                    </a>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center p-8 h-auto  w-full  border-[1px] border-gray-500 bg-gray-900/90 backdrop-blur-sm shadow-gray-900 rounded-2xl  group hover:bg-gray-900/90 ' >
                                <img className=' rounded-lg group-hover:opacity-10 group-hover:backdrop-blur-2xl ' src='assets/projects/crypto.jpg' alt='/' />
                                <div className='hidden z-[1000] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{/*Overlay */}
                                    <h3 className='text-2xl text-white tracking-widest text-center'>Crypto</h3>
                                    <p className='text-center pb-4 pt-2 text-white'>React JS</p>
                                    <a href='/'>
                                        <p className='text-center py-3 p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:opacity-[0.7]'>More info</p>
                                    </a>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center p-8 h-auto  w-full  border-[1px] border-gray-500 bg-gray-900/90 backdrop-blur-sm shadow-gray-900 rounded-2xl  group hover:bg-gray-900/90 ' >
                                <img className=' rounded-lg group-hover:opacity-10 group-hover:backdrop-blur-2xl ' src='assets/projects/crypto.jpg' alt='/' />
                                <div className='hidden z-[1000] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{/*Overlay */}
                                    <h3 className='text-2xl text-white tracking-widest text-center'>Crypto</h3>
                                    <p className='text-center pb-4 pt-2 text-white'>React JS</p>
                                    <a href='/'>
                                        <p className='text-center py-3 p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:opacity-[0.7]'>More info</p>
                                    </a>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center p-8 h-auto  w-full  border-[1px] border-gray-500 bg-gray-900/90 backdrop-blur-sm shadow-gray-900 rounded-2xl  group hover:bg-gray-900/90 ' >
                                <img className=' rounded-lg group-hover:opacity-10 group-hover:backdrop-blur-2xl ' src='assets/projects/crypto.jpg' alt='/' />
                                <div className='hidden z-[1000] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{/*Overlay */}
                                    <h3 className='text-2xl text-white tracking-widest text-center'>Crypto</h3>
                                    <p className='text-center pb-4 pt-2 text-white'>React JS</p>
                                    <a href='/'>
                                        <p className='text-center py-3 p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:opacity-[0.7]'>More info</p>
                                    </a>
                                </div>
                            </div>
                            
                            
                            
                        </div>

                    </div>
                </div>
                <div className=' absolute left-0 bottom-0'>
                    <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
                        &lt;/Projects&gt;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects