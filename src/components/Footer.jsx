import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='pt-10 px-4  md:px-20 lg:px-32 bg-gray-900 w-full overview-hidden' id='Footer'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className='w-full md:w-1/3 text-white mb-10 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-700 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Voluptas repudiandae deserunt error! 
                 Voluptatum ratione sunt quod quos similique aperiam quaerat.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About Us</a>
                <a href="#contact" className='hover:text-white'>Contact Us</a>
                <a href="#" className='hover:text-white'>Privacy Policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Give me Opportunity to make some good for You</h3>
            <p className='text-gray-300'> For latest Websites Home Page and frontend work, sent me message quickly</p>
          <div className='flex gap-2'>
            <input type="email" placeholder='Your Email' 
            className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md-w-auto' />
            <button className='py-2 px-4 rounded bg-blue-500 text-white '>Subscribe</button>
          </div>
            

        </div>
      </div>
      <div>
        <p className="text-gray-400 text-sm text-center mt-6">
  Copyright {new Date().getFullYear() } ©  ❤️ by Raju Kumar Mishra. All rights reserved.
</p>
      </div>
    </div>
  )
}

export default Footer
