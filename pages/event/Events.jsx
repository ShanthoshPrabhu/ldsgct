import { useRouter } from 'next/router';
import React from 'react'
import Cards from '../../components/Cards';
import Footer from '../../shared/Footer';
import Navbar from '../../shared/Navbar';

const Events = () => {
   const router = useRouter();
  const handleRegister = () => {
    router.push("/register")
  }
  return (
    <div className="flex flex-col items-center justify-center bg-white">
     <div className=''>
      <Navbar/>
     </div>
     <div className='mt-28 mx-10 justify-center items-center border bg-yellow-500  text-md font-normal text-gray-800 p-4 rounded-md'>
      All the below events can be participated by just paying the General Event Fee using the above "Register" button. Click on the below events to know individual event details.
     </div>
     <div className='text-4xl mt-8 font-light'>
      Events
     </div>
     <div 
         className='flex justify-center items-center mt-10 w-40 p-3 text-center text-white duration-500 bg-gray-800 rounded-md  hover:bg-yellow-500 md:w-48 cursor'
         onClick={handleRegister}>
            <button>Register</button>
      </div>
     <div className='mb-28'>
      <Cards/> 
     </div>
      <Footer/>
    </div> 
  )
}

export default Events
