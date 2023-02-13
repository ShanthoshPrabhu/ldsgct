import React from 'react'

const Payment = () => {
  return (
    <> 
    <div className='bg-gradient-to-r from-red-200 to-red-500 min-h-screen justify-center items-center flex'>   
     <div className='container' >
        <div className='flex justify-center items-center h-16 text-3xl md:text-5xl md:font-base mt-10 md:-mt-20'>
            Payment
       </div>
      <div className='grid grid-flow-row md:grid-flow-col justify-center gap-y-24 md:gap-x-24 mt-14 md:mt-28'>
       <div className='border bg-gray-100 w-96 h-56 shadow-2xl rounded-sm'>
         <div className='text-center'>Pay By UPI Id</div>
         <a href="" className='flex justify-center text-center align-middle'>something something</a>
       </div>
        <div className='border bg-white w-96 h-56 mb-16 shadow-2xl rounded-sm'>
         <div className='text-center'>Pay By QR Code</div>
         <a href="" className='flex justify-center text-center align-middle'>something something</a>
       </div>
       </div> 
       <div className='flex justify-center mt-10 md:mt-20'>
        <div className='border-2 p-3 text-center text-white bg-gradient-to-r from-red-200 to-red-500 rounded-md hover:bg-yellow-500 duration-500 w-40 md:w-48'>
          <button>Cancel</button>
        </div>
       </div>
      </div>
     </div>
    </>

  )
}

export default Payment