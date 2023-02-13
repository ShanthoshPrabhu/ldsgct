import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Payment = () => {
  const router = useRouter();
   const [showToast, setShowToast] = useState(false);
   const handleClickSpot = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  const handleClickOnline = ()=>{
    router.push("/onlinePay")
  }
   const handleClickOnspot = ()=>{
    router.push("/verificationOnspot")
  }
  return (
    <> 
    <Navbar/>
    <div className='flex items-center justify-center min-h-screen bg-white '>  
         <div className='container' >
          <div className='flex items-center justify-center h-16 mt-20 text-3xl font-normal text-black md:text-5xl md:font-base'>
              Payment
        </div>
         <div class=" text-center pt-4 lg:px-4 rounded-lg w-lg">
      <div class="p-2 bg-yellow-600 items-center text-indigo-100 leading-none rounded-lg flex lg:inline-flex mx-10 md:mx-0" role="alert">
        <span class="flex rounded-full bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3">Pay</span>
        <span class="font-semibold mr-2 text-left flex-auto">Attention English enthusiasts! Register for Brainstrain today and avail the early bird offer for just Rs 150 instead of Rs 180. Hurry up ladies and gentlemen, the offer stands until 18.02.23!</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
        </div> 
        <div 
        className='grid justify-center grid-flow-row mt-10 cursor-pointer md:grid-flow-col gap-y-24 md:gap-x-24 md:mt-14'
        >
        <div className='flex flex-col items-center justify-center h-48 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-700 sm:h-56 w-72 sm:w-96 '>
          <div className='text-lg font-thin text-center text-yellow-500 ' >Pay through Online mode</div>
                 <button  
                 className='p-2 mt-2 text-xs font-semibold text-center text-black bg-yellow-500 rounded-lg hover:bg-white '
                 onClick={handleClickOnline}>Pay ₹150  </button>
          </div>
          <div className='flex flex-col items-center justify-center h-48 p-4 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-700 sm:h-56 w-72 sm:w-96 '
          >
          {/* <img src="/onspot.jpeg" alt="onspot" className="absolute w-20 overflow-hidden opacity-25"/> */}
          <div className='relative text-lg font-light text-center text-yellow-500'>On the Spot Registration</div>
          <button onClick={handleClickOnspot} className='p-2 mt-2 text-xs font-semibold text-center text-black bg-yellow-500 rounded-lg hover:bg-white '>Pay ₹210  </button>
           {showToast && (
            <div class="fixed bottom-0 mb-16 mr-4 p-4 bg-gray-800 rounded-lg text-white shadow-lg">
              <p>Thanks for Registering, we will contact you soon.</p>
            </div>
            )}
          </div>
        </div> 
        <div className='flex justify-center mb-44 md:mt-20'>
          {/* <div className='w-40 p-3 mb-20 text-center text-white duration-500 bg-red-500 border-2 border-yellow-500 rounded-md bordere-2 hover:bg-blue-500 md:w-48' onCLick={handleClick}>
            <button>Cancel</button>
          </div> */}
         
        </div>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Payment