import React from 'react'
import { useRouter } from 'next/router';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';


const SignReg = () => {
  const router = useRouter();
  const handleSubmit = () => {
   router.push("/")
  }
  return (
    <>
    <Navbar/>
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-red-200 to-red-500 align-center">
       <div className='grid justify-center grid-flow-row px-20 py-10 my-8 space-y-8 align-middle bg-white border-2 shadow-lg md:px-36 '>
         <div className='grid justify-center'>
           Register
         </div>
         <div className=''>
          <label>
            Username
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="person-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none "   placeholder="Type Your Username" />
            </div>
         </div>
         <div className=''>
          <label>
            Email-Id
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="mail-outline"></ion-icon>
            </div>
             <input type="email" className="outline-none "   placeholder="Type Your Email-Id" />
            </div>
         </div>
         <div className=''>
          <label>
            College Name
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="book-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none "   placeholder="Type Your College Name" />
            </div>
         </div>
         <div className=''>
          <label>
            Year of Graduation
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="library-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none "   placeholder="Type Your Year of Graduation" />
            </div>
         </div>
         <div className=''>
          <label>
            Phone Number
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="call-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none" placeholder="Type Your Phone Number" />
            </div>
         </div>
         
         <div className='grid justify-center'>
            <button className='p-3 text-center text-white duration-500 border-2 rounded-md bg-gradient-to-r from-red-200 to-red-500 hover:bg-yellow-500' onClick={handleSubmit}>Proceed to Pay</button>
            </div>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignReg