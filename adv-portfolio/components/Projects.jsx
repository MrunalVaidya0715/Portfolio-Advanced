import React from 'react'
import Video from './Video'

function Projects() {
    return (
        <div className=' relative flex w-full h-screen border-2 border-white items-center justify-center'>
            <div className='m-0 p-0  absolute left-0 top-0 flex w-full h-full items-center justify-center overflow-hidden'>
                <img src='assets/svg/product-lines-bg.svg' alt="/" className='bg-center bg-cover ' />

            </div>
            <div className='z-[1] relative top-0 left-0 flex w-screen h-screen max-w-[1240px] items-center justify-center'>
                <div className=' absolute left-0 top-0'>
                    <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
                        &lt;Projects&gt;
                    </p>
                </div>
                <div className='border-2 border-white w-full h-full flex  items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex border-[1px] rounded-xl bg-gray-900/90 backdrop-blur-xl border-gray-500 w-[45vh] h-[60vh]' >
                            <h1>Mrunal</h1>
                        </div>

                    </div>

                </div>
                <div className=' absolute left-0 bottom-0'>
                    <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>
                        &lt;Projects&gt;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects