import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const VerificationOnline = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push("/event/Events")
  }
  return (
    <>
    <Navbar/>
    <div className='grid items-center justify-center mt-52'>
      <div className='flex flex-col items-center justify-center bg-white border rounded-lg shadow-2xl h-60 sm:h-56 w-80 sm:w-96'>
         <div className='font-light text-center text-black'>
            <p className="pb-6">Events registrations are closed</p>
            <p className="pb-6">On spot registrations are available for ₹210</p>
            <p className='text-yellow-500'>Stay Tuned!</p>
            </div>
        </div>
         <div 
         className='flex items-center justify-center w-40 p-3 mt-10 ml-20 text-center text-white duration-500 bg-yellow-500 border-gray-800 rounded-md md:ml-24 hover:bg-yellow-500 md:w-48'
         onClick={handleHome}>
            <button>Go to Events</button>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default VerificationOnline