import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai';
import About from './About';

function Navbar() {
    

    const [menu, setMenu] = useState(false);
    const [about, setAbout] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)

    }


    const handleAbout = () => {
        setAbout(!about)

    }
    return (

        <div className='z-[100] fixed top-0 right-0 w-full h-20 bg-[#252532]  '>{/*bg-[#252532] */}
            <div className='flex w-full h-full items-center justify-between p-4'>
                {
                    menu ? (
                        <div>
                        </div>
                    ) : (
                        <div onClick={handleAbout} className=' text-[#8c8c8e] hover:text-white ease-in duration-200 cursor-pointer'>
                            <BsThreeDotsVertical size={30} />
                        </div>
                    )
                }

                <div>

                </div>

                {
                    about ? (
                        <div>
                        </div>
                    ) : (
                        <div onClick={handleMenu} className='text-[#8c8c8e]  hover:text-white ease-in duration-200 cursor-pointer'>
                            <AiOutlineMenu size={30} />
                        </div>
                    )
                }

            </div>
            {/*About */}
            <div className={about ? 'fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
                <About about={about} handleAbout={handleAbout} />
            </div>






            {/*Menu pop */}
            <div className={menu ? 'fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
                <div className={menu ? 'fixed top-0 right-[0%] w-[250px] h-full bg-[#20202a] shadow-2xl ease-in-out duration-1000' : 'fixed top-0 right-[-100%] w-full h-full ease-in-out duration-1000'}>
                    <div className='flex w-full h-full flex-col items-center justify-between'>
                        <div onClick={handleMenu} className='px-5 h-20 w-full flex items-center  justify-start bg-[#252532] text-[#8c8c8e] hover:text-white ease-in duration-200 cursor-pointer'>
                            <AiOutlineClose size={20} />
                        </div>
                        <div className='flex flex-col w-full  items-start justify-center px-8'>
                            <ul >
                                <Link href='/'>
                                    <li className='text-[#8c8c8e] mb-4 text-lg font-bold hover:text-[#ffc107] hover:translate-x-5 ease-in duration-200'>Home</li>
                                </Link>
                                <Link href='/'>
                                    <li className='text-[#8c8c8e] mb-4 text-lg font-bold hover:text-[#ffc107] hover:translate-x-5 ease-in duration-200'>About</li>
                                </Link>
                                <Link href='/'>
                                    <li className='text-[#8c8c8e] mb-4 text-lg font-bold hover:text-[#ffc107] hover:translate-x-5 ease-in duration-200'>Skills</li>
                                </Link>
                                <Link href='/'>
                                    <li className='text-[#8c8c8e] mb-4 text-lg font-bold hover:text-[#ffc107] hover:translate-x-5 ease-in duration-200'>Projects</li>
                                </Link>
                                <Link href='/'>
                                    <li className='text-[#8c8c8e] text-lg font-bold hover:text-[#ffc107] hover:translate-x-5 ease-in duration-200'>Contact</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='h-20 w-full bg-[#252532]'>

                        </div>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Navbar