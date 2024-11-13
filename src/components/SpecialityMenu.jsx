import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-10 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find Trainer who are Specialised</h1>
      <p className='sm:w-1/2 text-center text-sm'>Types of trainers in each field of sports</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item,index) => (
            <Link onClick={() => window.scrollTo(0, 0)} 
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`/doctors/${item.speciality}`}>
                <img width={150} className='rounded-full hover:scale-105 transition-all duration-300' src={item.image} alt="" />
                <p>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
