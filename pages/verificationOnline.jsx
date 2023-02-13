import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const verificationOnline = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push("/")
  }
  return (
    <>
    <Navbar/>
    <div className='grid  justify-center items-center mt-52'>
      <div className='flex flex-col items-center justify-center h-60  bg-white border rounded-lg shadow-2xl sm:h-56 w-80 sm:w-96'>
         <div className='font-light text-center text-black'>
            <p className="pb-6">Thank you for Paying.</p>
            <p className="pb-6">Our event team will contact you after verification.</p>
            <p className='text-yellow-500'>Stay Tuned!</p>
            </div>
        </div>
         <div 
         className='flex justify-center items-center mt-10 w-40 p-3 ml-20 md:ml-24 text-center text-white duration-500 bg-yellow-500 border-gray-800 rounded-md  hover:bg-yellow-500 md:w-48'
         onClick={handleHome}>
            <button>Go to Home</button>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default verificationOnline