import Image from 'next/image'
import React from 'react'
import demo1 from '../public/assets/myImages/demo1.png'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
function About() {
  return (
    <div className='flex  flex-col items-center w-[325px] h-full  bg-gradient-to-b bg-[#252532] justify-between'>{/*Container */}
        <div className=' h-[30%] flex flex-col items-center justify-center'>{/*Images */}
            <div className='w-[40%] '>
                <Image className='rounded-full' src={demo1}  alt="/"/>
            </div>
            <div className='text-center p-3'>
                <h3 className='text-white text-lg tracking-widest'>Mrunal Vaidya</h3>
                <h3 className='text-[#8C8C8E] text-sm font-thin'>IT Engineering Student</h3>
                <h3 className='text-[#8C8C8E] text-sm font-thin'>Xavier Institute of Engineering, Mumbai</h3>

            </div>
        </div>
        <div className='py-1 px-2 bg-[#20202a] flex flex-col w-full h-full overflow-y-auto scroll scrollbar-hide items-center justify-between'>{/*Scrollable area */}
            <div className='flex w-full flex-col justify-between px-6'>{/*Location & Details */}
               <div className='flex   items-center justify-between '>
                <div>
                    <p className='text-white'>Location:</p>
                </div>
                <div>
                     <p className='text-[#8C8C8E]'>Mumbai</p>   
                </div>
                
               </div>
               <div className='flex   items-center justify-between '>
                <div>
                    <p className='text-white'>Current Semester:</p>
                </div>
                <div>
                     <p className='text-[#8C8C8E]'>VI</p>   
                </div>
                
               </div>
               <div className='flex   items-center justify-between '>
                <div>
                    <p className='text-white'>Age:</p>
                </div>
                <div>
                     <p className='text-[#8C8C8E]'>20</p>   
                </div>
                
                
               </div>
               <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nesciunt rerum nulla reprehenderit quia ratione, quaerat recusandae. Dolorem natus porro aperiam similique tempore, earum ullam nisi incidunt excepturi deserunt voluptates, adipisci mollitia voluptatum eius tempora! Delectus deleniti esse quasi unde nobis tenetur commodi aspernatur ducimus voluptates facilis sit fugit ipsum ut quidem id officia necessitatibus facere distinctio, minus quas laborum hic. Ullam officia, dolore officiis et reprehenderit quidem voluptate odit, fugiat illo similique, veniam aliquid.
                    </p>
                </div>
            
            
            </div>
            <div>{/*CGPA */}

            </div>
            <div>{/*Skills Percentage*/}

            </div>
            
        </div>
        <div className='w-full py-1 px-2 flex justify-between'>{/*Footer Links */}
            <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 '>
                <AiFillGithub size={25}/>
            </div>
            <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 '>
                <AiFillLinkedin size={25}/>
            </div>
            <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 '>
                <AiOutlineInstagram size={25}/>
            </div>
            <div className='text-gray-500 m-2 hover:text-white ease-in duration-200 '>
                <AiFillMail size={25}/>
            </div>
        </div>
    </div>
  )
}

export default About