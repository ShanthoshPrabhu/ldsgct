import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Payment = () => {
  const router = useRouter();
   const [showToast, setShowToast] = useState(false);
   const handleClickOnline = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  const handleClick = ()=>{
    router.push("/")
  }
   const handleClickOnspot = ()=>{
    router.push("/onlinePay")
  }
  return (
    <> 
    <Navbar/>
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] '>   
     <div className='container' >
        <div className='flex items-center justify-center h-16 mt-0 text-3xl font-bold text-white md:text-5xl md:font-base'>
            Payment
       </div>
      <div 
      className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-col gap-y-24 md:gap-x-24 mt-14 md:mt-28'
     >
       <div className='flex flex-col items-center justify-center h-48 mx-12 bg-gray-100 border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96 '  onClick={handleClickOnspot}>
         <div className='text-center ' >Pay through Online method</div>
        </div>
        <div className='flex flex-col items-center justify-center h-48 mx-12 bg-gray-100 border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96 '
        onClick={handleClickOnline}>
         <div className='text-center'>On the spot registration</div>
        </div>
       </div> 
       <div className='flex justify-center mt-10 md:mt-20'>
        <div className='w-40 p-3 text-center text-white duration-500 bg-red-500 border-2 border-yellow-500 rounded-md bordere-2 hover:bg-blue-500 md:w-48' onCLick={handleClick}>
          <button>Cancel</button>
        </div>
         {showToast && (
          <div class="fixed bottom-20 mb-12 mr-4 p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <p>Thanks for Registering, we will contact you after verifying.</p>
          </div>
           )}
       </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default Payment