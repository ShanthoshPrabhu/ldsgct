import React from 'react'
import { useRouter } from 'next/router';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
<<<<<<< HEAD:pages/register.jsx
import Footer from '../shared/Footer';
=======
>>>>>>> dcd35c0a98e032190bb23f5b35169389e61becfd:pages/SignReg.jsx
import Navbar from '../shared/Navbar';


const SignReg = () => {
  const router = useRouter();
  const handleSubmit = () => {
   router.push("/Payment")
  }
  return (
<<<<<<< HEAD:pages/register.jsx
    <>
    <Navbar/>
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-red-200 to-red-500 align-center">
       <div className='grid justify-center grid-flow-row px-20 py-10 my-8 space-y-8 align-middle bg-white border-2 shadow-lg md:px-36 '>
         <div className='grid justify-center'>
=======
   <div>
      <div><Navbar/></div>
      <div className="flex justify-center min-h-screen align-center bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] mt-16 rounded-lg" >
       <div className='grid justify-center grid-flow-row px-20 py-10 my-8 space-y-8 align-middle bg-white border-2 rounded-lg shadow-lg md:px-36 '>
         <div className='grid justify-center text-2xl font-bold'>
>>>>>>> dcd35c0a98e032190bb23f5b35169389e61becfd:pages/SignReg.jsx
           Register
         </div>
         <div className=''>
          <label className='font-bold'>
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
          <label className='font-bold'>
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
          <label className='font-bold'>
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
<<<<<<< HEAD:pages/register.jsx
          <label>
            Year of Graduation
=======
          <label className='font-bold'>
            Year of Study
>>>>>>> dcd35c0a98e032190bb23f5b35169389e61becfd:pages/SignReg.jsx
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="library-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none "   placeholder="Type Your Year of Graduation" />
            </div>
         </div>
         <div className=''>
          <label className='font-bold'>
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
            <button className='p-3 text-center text-white duration-500 bg-red-600 border-2 rounded-md hover:bg-yellow-500' onClick={handleSubmit}>Proceed to Pay</button>
            </div>
       </div>
    </div>
<<<<<<< HEAD:pages/register.jsx
    <Footer/>
    </>
=======
   </div>
>>>>>>> dcd35c0a98e032190bb23f5b35169389e61becfd:pages/SignReg.jsx
  )
}

export default SignReg