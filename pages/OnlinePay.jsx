import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer';

const Payment = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };
  return (
    <> 
    <Navbar/>
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] mt-16'>   
     <div className='container' >
        <div className='flex items-center justify-center h-16 mt-10 text-3xl font-bold text-red-700 md:text-5xl sm:font-light'>
            Online Mode Payment
       </div>
      <div className='grid justify-around grid-flow-row md:grid-flow-col'>
      <div 
      className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-row gap-y-24 md:gap-x-24 mt-14 md:mt-28 '>
       <div className='flex flex-col items-center justify-center h-48 p-6 mx-12 bg-gray-100 border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96 '>
        <img src="/qr.jpeg" alt="QR_Code" className="overflow-hidden"/>
         <div className='font-bold text-center' >Scan the QR Code to pay</div>
        </div>
        <div className='flex flex-col items-center justify-center h-48 mx-12 bg-white border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96'>
        <img src="/UPI-Color.png" alt="" width="150" height="150" className="mb-4"/>
        <a href="harishhar2304@oksbi" className="mb-4 text-blue-500"> harishhar2304@oksbi </a>
         <div className='font-bold text-center'>Click to pay through UPI Id</div>
        </div>
        <div className='flex flex-col items-center justify-center h-48 mx-12 bg-white border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96'>
        <div className='mb-4 text-xl font-bold text-center text-blue-500'>9894578288</div>
         <div className='h-10 font-bold text-center'>Pay through Phone Number</div>
         <div className='h-10 font-light text-center'>You can pay the registration fee to this number</div>
         
        </div>
       </div> 
        <div className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-row gap-y-24 md:gap-x-24 mt-14 md:mt-28'>
       <div className='flex flex-col items-center justify-center h-48 p-10 mx-12 bg-gray-100 border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96'>
         <form className='grid items-center justify-center grid-flow-row'>
          <input type="file" id="file-input" />
        <button 
        type="submit" 
        className=" text-white mt-5 bg-gradient-to-r  from-[#FF9500] via-[#FFC300] to-[#FFEA00] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handleSubmit} 
         >Submit</button>
         </form>
         {showToast && (
          <div className="fixed bottom-0 mb-4 mr-4 p-4 bg-gray-800 rounded-lg text-white shadow-lg">
            <p>Thanks for Registering, we will contact you after verifying.</p>
          </div>
           )}
        </div>
        <div  className='flex flex-col items-center justify-center h-48 p-10 mx-12 bg-gray-100 border rounded-lg shadow-2xl sm:h-56 w-72 sm:w-96'>HI</div>
        </div>
       </div>
       <div className='flex justify-center mt-10 md:mt-20'>
        {/* <div className='w-40 p-3 text-center text-white duration-500 border-2 rounded-md bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] hover:bg-yellow-500 md:w-48'>
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