import React from 'react'
import Cards from '../../components/Cards';
import Navbar from '../../shared/Navbar';

const Events = () => {
   
  return (
    <div className="bg-gradient-to-l from-[#FF9500] via-[#FFC300] to-[#FFEA00] justify-center items-center flex">
     <div className=''>
      <Navbar/>
     </div>
    <div className='mt-20 mb-10'>
      <Cards/> 
     </div>
    </div>
  )
}

export default Events
