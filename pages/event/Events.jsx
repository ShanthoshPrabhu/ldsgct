import React from 'react'
//import { useNavigate } from 'react-router-dom';
import Cards from '../../components/Cards';
import Navbar from '../../shared/Navbar';

const Events = () => {
   
  return (
    <div className="bg-red-500">
    <div className='mt-20'>
        <Navbar/>
    </div>
    <div className=''>
    <div className="p-10 lg:w-full lg:p-5 sm:w-80"><Cards/></div> 
    </div>
    </div>
  )
}

export default Events
