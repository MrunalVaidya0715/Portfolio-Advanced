import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'
import About from './About';
/*
<BsThreeDotsVertical size={40}/>
      <AiOutlineMenu size={40}/>
*/
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }
  const handleAbout = () => {
    setAbout(!about);
  }

  return (
    <div className='z-[100] fixed w-full h-20 bg-[#20202a] '>
      <div className=' flex w-full h-full items-center justify-between p-3'>
        <div>{/*left */}
          <div onClick={handleAbout} className='md:hidden text-[#8c8c8e] cursor-pointer hover:text-white ease-in duration-200'>{/*About */}
            <BsThreeDotsVertical size={30} />
          </div>

        </div>
        <div>{/*Right */}
          <div className='md:hidden cursor-pointer text-[#8c8c8e] hover:text-white ease-in duration-200'>{/*Menu */}
            <AiOutlineMenu size={30} />
          </div>

          <div className='hidden md:flex'>{/*ul list */}
            <ul className='flex '>
              <Link href='/'>
                <li className='text-[#8c8c8e] mr-4 text-lg hover:text-[#ffc107] ease-in duration-200'>Home</li>
              </Link>
              <Link href='/'>
                <li className='text-[#8c8c8e] mr-4 text-lg hover:text-[#ffc107] ease-in duration-200'>About</li>
              </Link>
              <Link href='/'>
                <li className='text-[#8c8c8e] mr-4 text-lg hover:text-[#ffc107] ease-in duration-200'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='text-[#8c8c8e] mr-4 text-lg hover:text-[#ffc107] ease-in duration-200'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='text-[#8c8c8e] text-lg hover:text-[#ffc107] ease-in duration-200'>Contact</li>
              </Link>
            </ul>
          </div>
        </div>

      </div>




      <div className={about ? 'fixed top-0 left-0 w-[325px] h-screen bg-blue-300 ease-in duration-700' : 'fixed top-0 left-[-100%] ease-out duration-700'}>
        <div onClick={handleAbout} className='z-[110] md:hidden cursor-pointer text-[#8c8c8e] hover:text-white ease-in duration-200'>{/*Menu */}
          <BsThreeDotsVertical size={30} />
        </div>
        <About/>
      </div>



    </div >
  )
}

export default Navbar