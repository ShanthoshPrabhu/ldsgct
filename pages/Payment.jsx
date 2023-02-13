import React from 'react'
import { useRouter } from 'next/router'

const Payment = () => {
  const router = useRouter();
  const handleClickOnline = ()=>{
    router.push("/OnlinePay")
  }
   const handleClickOnspot = ()=>{
    router.push("/Onspot")
  }
  return (
    <> 
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-red-200 to-red-500'>   
     <div className='container' >
        <div className='flex items-center justify-center h-16 mt-10 text-3xl md:text-5xl md:font-base'>
            Payment
       </div>
      <div 
      className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-col gap-y-24 md:gap-x-24 mt-14 md:mt-28'
      onClick={handleClickOnline}>
       <div className='grid items-center justify-center h-56 bg-gray-100 border rounded-sm shadow-2xl w-96'>
         <div className='text-center ' >Pay through Online method</div>
        </div>
        <div className='grid items-center justify-center h-56 bg-white border rounded-sm shadow-2xl w-96'
        onClick={handleClickOnspot}>
         <div className='text-center'>On the spot registration</div>
        </div>
       </div> 
       <div className='flex justify-center mt-10 md:mt-20'>
        <div className='w-40 p-3 text-center text-white duration-500 border-2 rounded-md bg-gradient-to-r from-red-200 to-red-500 hover:bg-yellow-500 md:w-48'>
          <button>Cancel</button>
        </div>
       </div>
      </div>
     </div>
    </>

  )
}

export default Payment