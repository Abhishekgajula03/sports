import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 py-10'>
        {/*---------left------*/}
       <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment <br /> with the most experienced Trainer
        </p>
        <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Seek for the trainer who you think is better for you,<br className='hidden sm:block' /> schedule an appointment</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white py-8 px-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'> 
            Book Appointment <img className='w-6' src={assets.arrow_icon} alt="" />
        </a>
        
       </div>
       {/**------right-----*/}
       <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-20 h-auto rounded-lg' src={assets.header_img} alt="" />
       </div>
    </div>
  )
}

export default Header
