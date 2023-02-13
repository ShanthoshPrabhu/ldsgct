import React from 'react'
//import { useNavigate } from 'react-router-dom';
import Cards from '../../components/Cards';
import Navbar from '../../shared/Navbar';

const Events = () => {
   
  return (
    <div className="bg-gradient-to-l from-[#FF9500] via-[#FFC300] to-[#FFEA00]">
    <div className=''>
        <Navbar/>
    </div>
    <div className='mt-14'>
    <div className=""><Cards/></div> 
    </div>
    </div>
  )
}

export default Events
