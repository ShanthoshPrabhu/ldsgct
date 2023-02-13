import React from 'react'
import { useNavigate } from 'react-router-dom';
import Cards from '../Components/Cards';

const Events = () => {
   
  return (
    <>
    <div className='mt-20'>
        Events
    </div>
    <div className=''>
    <div className=" lg:w-full lg:p-5 sm:w-80 p-10"><Cards/></div> 
    </div>
    </>
  )
}

export default Events
