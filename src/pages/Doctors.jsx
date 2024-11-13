import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Doctors = () => {
    const { speciality } = useParams()
    const [filterDoc,setFilterDoc] = useState([])
    const navigate= useNavigate()

    const { doctors } = useContext(AppContext)
    
    
    const applyFilter = () => {
        if(speciality){ 
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        }else{
            setFilterDoc(doctors)
        }
    }
    
  useEffect(()=>{
        applyFilter()
     },[doctors,speciality])
  return (
    <div>
        <p className='text-gray-600'>Browse through or trainers.</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
            <div className='flex flex-col gap-4 text-sm text-gray-600'>
                
                <p onClick={() => speciality === 'Cricket'? navigate('/doctors'):navigate('/doctors/Cricket')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cricket" ? "bg-orange-100 text-black ": ""}`}>Cricket</p>
                <p onClick={() => speciality === 'Football'? navigate('/doctors'):navigate('/doctors/Football')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor- ${speciality === "Football" ? "bg-orange-100 text-black ": ""}`}>Football</p>
                <p onClick={() => speciality === 'Chess'? navigate('/doctors'):navigate('/doctors/chess')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "chess" ? "bg-orange-100 text-black ": ""}`}>Chess</p>
                <p onClick={() => speciality === 'Javelin'? navigate('/doctors'):navigate('/doctors/javelin')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "javelin" ? "bg-orange-100 text-black ": ""}`}>Javelin</p>
                <p onClick={() => speciality === 'Badminton'? navigate('/doctors'):navigate('/doctors/badminton')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "badminton" ? "bg-orange-100 text-black ": ""}`}>Badminton</p>
                <p onClick={() => speciality === 'Karate'? navigate('/doctors'):navigate('/doctors/karate')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "karate" ? "bg-orange-100 text-black ": ""}`}>Karate</p>
                <p onClick={() => speciality === 'Tennis'? navigate('/doctors'):navigate('/doctors/tennis')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "tennis" ?"bg-orange-100 text-black ": ""}`}>Tennis</p>
            </div>
            <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                { 
                    filterDoc.map((item,index)=>(

                        <div onClick={()=>navigate(`/appointment/${item._id}`)} className=' border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                            <img className='bg-blue-50' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Avaliable</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
            
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Doctors
