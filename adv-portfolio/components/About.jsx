
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import profile from '../public/assets/myImages/demo1.png'
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
function About(props) {
    return (
        <div className={props.about ? 'fixed top-0 left-0 h-screen w-[325px] bg-[#252532] shadow-2xl ease-in-out duration-700' : 'fixed  top-0 left-[-100%] h-screen w-[325px] bg-[#252532] shadow-2xl ease-in-out duration-1000'}>
            <div className='flex h-full w-full flex-col items-center justify-between'>
                <div className='flex flex-col items-center justify-between w-full h-[35vh] p-4 '>
                    <div onClick={props.handleAbout} className='absolute right-0 top-6 '>
                        <div className='flex w-full items-end justify-end text-[#8c8c8e] hover:text-white ease-in duration-200 cursor-pointer  '>
                            <BsThreeDotsVertical size={30} />
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <img src='assets/meS2Png.png' alt="/" width='130' height='50' style={{ borderRadius: "50%" }} />
                    </div>
                    <div className='flex flex-col text-[#8c8c8e] items-center mt-1'>
                        <h3 className='text-white text-xl tracking-widest' >Mrunal Vaidya</h3>
                        <h4 className='font-light text-sm'>Information technology</h4>
                        <h5 className='font-light text-sm'>Xavier Institute of Engineering</h5>
                        

                    </div>
                </div>
                <div className='flex w-full  flex-col bg-[#20202a] h-full '>

                </div>
                <div className='w-full py-1 px-2 flex justify-between'>{/*Footer Links */}
                    <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 cursor-pointer '>
                        <AiFillGithub size={25} />
                    </div>
                    <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 cursor-pointer '>
                        <AiFillLinkedin size={25} />
                    </div>
                    <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 cursor-pointer '>
                        <AiOutlineInstagram size={25} />
                    </div>
                    <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 cursor-pointer '>
                        <AiOutlineMail size={25} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About