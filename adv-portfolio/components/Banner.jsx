import React from 'react'

function Banner() {
    return (
        <div className='w-full h-screen mt-[5rem]'>
            <div className='flex flex-col items-center w-full  max-w-[1240px]  mx-auto p-4 justify-center '>
                <div className=' bg-blend-difference   relative  rounded-lg  w-full h-[50vh] min-w-[40vh] bg-[#20202a] opacity-100 bg-right-top bg-cover bg-no-repeat' style={{ backgroundImage: "url('/assets/mum1.jpg')" }}>
                    <div className='absolute top-0 left-0 w-full h-full bg-gray-900/50'></div>
                    <div className=' z-[1] absolute bottom-3 text-white p-2 flex items-center justify-center w-full h-full'>
                        <h1 className='text-5xl lg:text-8xl'>Discover my Amazing Work-Space</h1>

                    </div>
                    <div className='z-[25] absolute bottom-0 right-0 hidden md:flex'>
                        <img src='assets/me2Png.png' alt="/" width='400' height='50' style={{ borderRadius: "2%" }} />

                    </div>
                </div>
                <div className='z-[2] grid grid-cols-2 lg:grid-cols-4  gap-4 py-[20px] w-full '>
                    <div className='flex items-center border-[1px] border-gray-500 justify-around  bg-[#15181E] shadow-md hover:shadow-lg hover:shadow-gray-900 hover:translate-y-[-0.2rem] rounded-lg p-[35px] ease-in duration-200'>
                        <div>
                            <p className='text-[#FFC107] font-bold text-xl'>2+</p>
                        </div>
                        <div>
                            <p className='font-bold text-xl'>Experience</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[1px] border-gray-500 justify-around bg-[#15181E] shadow-md hover:shadow-lg hover:shadow-gray-900 hover:translate-y-[-0.2rem] rounded-lg p-[35px] ease-in duration-200'>
                        <div>
                            <p className='text-[#FFC107] font-bold text-xl'>2+</p>
                        </div>
                        <div>
                            <p className='font-bold text-xl'>Experience</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[1px] border-gray-500 justify-around bg-[#15181E] shadow-md hover:shadow-lg hover:shadow-gray-900 hover:translate-y-[-0.2rem] rounded-lg p-[35px] ease-in duration-200'>
                        <div>
                            <p className='text-[#FFC107] font-bold text-xl'>2+</p>
                        </div>
                        <div>
                            <p className='font-bold text-xl'>Experience</p>
                        </div>
                    </div>
                    <div className='flex items-center border-[1px] border-gray-500 justify-around bg-[#15181E] shadow-md hover:shadow-lg hover:shadow-gray-900 hover:translate-y-[-0.2rem] rounded-lg p-[35px] ease-in duration-200'>
                        <div>
                            <p className='text-[#FFC107] font-bold text-xl'>2+</p>
                        </div>
                        <div>
                            <p className='font-bold text-xl'>Experience</p>
                        </div>
                    </div>
            
                </div>






            </div>

        </div>
    )
}

export default Banner