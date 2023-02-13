import React from 'react'
import { useRouter } from 'next/router'

const Payment = () => {
  return (
    <> 
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00]'>   
     <div className='container' >
        <div className='flex items-center justify-center h-16 mt-10 text-3xl md:text-5xl md:font-base'>
            Online Mode Payment
       </div>
      <div className='grid justify-around grid-flow-row md:grid-flow-col'>
      <div 
      className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-row gap-y-24 md:gap-x-24 mt-14 md:mt-28'>
       <div className='h-56 pt-4 bg-gray-100 border rounded-lg shadow-2xl w-96'>
         <div className='text-center ' >Scan the QR Code to pay</div>
        </div>
        <div className='h-56 pt-4 bg-white border rounded-lg shadow-2xl w-96'>
         <div className='text-center'>Pay through UPI Id</div>
        </div>
        <div className='flex flex-col items-center justify-center h-56 gap-4 bg-white border rounded-lg shadow-2xl w-96'>
         <div className='text-center'>Pay through Phone Number</div>
         <div className='text-center '>9894578288</div>
        </div>
       </div> 
        <div className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-row gap-y-24 md:gap-x-24 mt-14 md:mt-28'>
       <div className='flex flex-col items-center justify-center h-56 gap-4 bg-white border rounded-lg shadow-2xl w-96'>
         <form className='grid items-center justify-center grid-flow-row'>
          <input type="file" id="file-input" />
        <button type="submit" class="text-white mt-5 bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >Submit</button>
         </form>
        </div>
        </div>
       </div>
       <div className='flex justify-center mt-10 md:mt-20'>
        {/* <div className='w-40 p-3 text-center text-white duration-500 border-2 rounded-md bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] hover:bg-yellow-500 md:w-48'>
          <button>Cancel</button>
        </div> */}
       </div>
      </div>
     </div>
    </>

  )
}

export default Payment