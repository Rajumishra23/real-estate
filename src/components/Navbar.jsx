import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { assets } from '../assets/assets';

const Navbar = () => {
   const [showMobileMenu, setShowMobileMenu] = useState(false)

   useEffect(() =>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
   },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-1 px-1 md:px-25lg:px- b40g-transparent'>
        <img src={logo} alt="Logo"/>

        <ul className='hidden md:flex gap-7 text-2xl text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-900'><u><b>Home</b></u></a>
          <a href="#About" className='cursor-pointer hover:text-gray-800'><u><b>About</b></u></a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-800'><u><b>Projects</b></u></a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-800'><u><b>Testimonials</b></u></a>
        </ul>
    
    
        <button className="hidden md:block bg-white px-4 py-1 rounded-full">Sign Up</button>
        <img  onClick={()=> setShowMobileMenu(true)}src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="" />
        
      </div>
     {/* for mobile menu*/}
     <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
  <div className="flex justify-end p-6 cursor-pointer">
          <img onClick={()=> setShowMobileMenu(false)}src={assets.cross_icon} className='w-6 ' alt="" />
       </div> 
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'><u><b>Home</b></u></a>
          <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'><u><b>About</b></u></a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'><u><b>Projects</b></u></a>
          <a onClick={()=> setShowMobileMenu(false)} href="#testimonials" className='px-4 py-2 rounded-full inline-block'><u><b>testimonials</b></u></a>
        </ul>
     </div>
    </div>
    
  )
}

export default Navbar
