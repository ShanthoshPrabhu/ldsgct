import React from 'react'
import Cards from '../../components/Cards';
import Footer from '../../shared/Footer';
import Navbar from '../../shared/Navbar';

const Events = () => {
   
  return (
    <div className="bg-white justify-center items-center flex">
     <div className=''>
      <Navbar/>
     </div>
    <div className='mt-20 mb-20'>
      <Cards/> 
     </div>
      <Footer/>
    </div> 
  )
}

export default Events
