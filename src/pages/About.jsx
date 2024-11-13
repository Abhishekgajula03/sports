import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-'>
            <p>Welcome to Sports,your trusted partner in managing your health,by booking you the best trainer to look after your health and body condition on a regular basis</p>
            <p>Sports is commited to excellence in excercising,healthcae technology.We continuously try to give our best in improving your health by our trainers.</p>
            <b className='text-gray-800'>OUR VISION</b>
            <p>Our vision is to make our surrounding as healthy and fit as us.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US?</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>EFFICIENCY</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
    
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>CONVIENCE</b>
            <p> Access to a network of trusted athlete professional in your area.</p>
        </div>
    
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>PERSONALISATION</b>
            <p>Tailored recommendations and remainder to help you stay on the top of your health.</p>
        </div>

      </div>
    </div>
  )
}

export default About
 