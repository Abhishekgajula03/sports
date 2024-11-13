import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-md'>
        {/* ----------left--------*/} 
        <div>
            <img width={150} className='mb-5' src={assets.logos} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>We believe to that great power <br/> comes from great responsiblity</p>
        </div>
        {/* ----------middle--------*/}
        <div>
            <p className='text-xl font-medium mb-5'>
                Company
            </p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* ---------right--------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 9010042382</li>
                <li>abhisriakhi@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>&copy; Copyright 2024 Abhishek Gajula</p>
      </div>
    </div>
  )
}

export default Footer
