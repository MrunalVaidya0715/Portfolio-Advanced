import React, { useEffect, useState } from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi2';




function ScrollUp() {
   
   const [isVisible, setIsVisible] = useState(false);

   useEffect(()=>{
       const handleVisible = () =>{
        if(window.scrollY >= 190){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
       }
       window.addEventListener('scroll', handleVisible);
       //console.log("Set")

       return ()=>{
        window.removeEventListener('scroll',handleVisible)
       }
       
   },[])


    const upScroll = () =>{
        window.scroll(0,0)
    }
  return (
    <div onClick={upScroll} className={isVisible?(' fixed bottom-[25px] right-[5px] md:bottom-[10%] md:right-[2%] lg:bottom-[10%] lg:right-[4%] z-[150] w-[45px] h-[45px] bg-gray-900/90 backdrop-blur-md rounded-full flex items-center justify-center border-[1px] border-gray-700 shadow-lg shadow-gray-700 hover:opacity-[0.5] cursor-pointer'):('hidden')}>
        <p className='text-white'>
            <HiOutlineChevronDoubleUp size={25}/>
        </p>
    </div>
  )
}

export default ScrollUp