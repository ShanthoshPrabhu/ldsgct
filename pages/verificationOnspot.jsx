import React from 'react'
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const verificationOnspot = () => {
  return (
    <>
    <Navbar/>
    <div className='grid  justify-center items-center mt-60'>
      <div className='flex flex-col items-center justify-center h-60  bg-white border rounded-lg shadow-2xl sm:h-56 w-80 sm:w-96'>
         <div className='font-light text-center text-black'>
            <p className="pb-6">Thank you for Registering.</p>
            <p className="pb-6">Please complete the registration process at the event desk on the day of the event</p>
            <p className='text-yellow-500'>Stay Tuned!</p>
            <ion-icon name="sad-outline"/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default verificationOnspot