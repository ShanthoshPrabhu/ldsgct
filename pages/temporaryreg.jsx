import React from 'react'
import Footer from '../shared/Footer';
import Navbar from './../shared/Navbar';

const temporaryreg = () => {
  return (
    <>
    <Navbar/>
    <div className='grid  justify-center items-center mt-60'>
      <div className='flex flex-col items-center justify-center h-48 mx-12 bg-white border rounded-lg shadow-2xl sm:h-56 w-80 sm:w-96'>
         <div className='font-light text-center text-black'>
            <p>Registrations will be open tomorrow.</p>
            <p className='text-yellow-500'>Stay Tuned!</p>
            <ion-icon name="sad-outline"/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default temporaryreg