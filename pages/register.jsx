import React, { useState } from 'react'
import { useRouter } from 'next/router';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Navbar from '../shared/Navbar';
import {addDoc,collection,doc,serverTimestamp,updateDoc} from "@firebase/firestore";
import { db } from '../firebase';

const SignReg = () => {
  const router = useRouter();
  const [name,setname]=useState('');
  const [email,setEmail]=useState('');
  const [college,setCollege]=useState('');
  const [gradYear,setGradYear]=useState('');
  const[phNumber,setPhNumber]=useState('');
  const [error,seterror]=useState('')

 async function registerDetails(){
  if(!name || !email || !gradYear || !phNumber || !college){
    return seterror('Kindly fill all of your details')
  }
  const split = email.split('@')
  if(split[1] != 'gmail.com'){
    console.log(split)
   return seterror('enter your email correctly')
  }
  
  if(name && email && gradYear && phNumber && college){
   seterror('')
    const Data = {
      name:name,
      email:email,
      college:college,
      gradYear:gradYear,
      phNumber:phNumber,
      timestamp:serverTimestamp()
    }
      await addDoc(collection(db,'register'),Data)
  }

    router.push("/payment")
  }
  
  return (
    <>
   <div>
      <div><Navbar/></div>
      <div className="flex justify-center min-h-screen align-center bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00] mt-16 rounded-lg mb-16" >
       <div className='grid justify-center grid-flow-row px-20 py-10 my-8 space-y-8 align-middle bg-white border-2 rounded-lg shadow-lg md:px-36 '>
         <div className='grid justify-center text-2xl font-bold'>
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
             <input type="text" className="outline-none " value={name} onChange={e=>setname(e.target.value)}  placeholder="Type Your Username" />
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
             <input type="email" className="outline-none " value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Type Your Email-Id" />
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
             <input type="text" className="outline-none " value={college} onChange={e=>setCollege(e.target.value)}  placeholder="Type Your College Name" />
            </div>
         </div>
         <div className=''>
          <label className='font-bold'>
            Year of Graduation
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="library-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none " value={gradYear} onChange={e=>setGradYear(e.target.value)}  placeholder="Type Your Year of Graduation" />
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
             <input type="text" className="outline-none" value={phNumber} onChange={e=>setPhNumber(e.target.value)} placeholder="Type Your Phone Number" />
            </div>
         </div>
         
         <div className='grid justify-center'>
            <button className='p-3 text-center text-white duration-500 bg-red-600 border-2 rounded-md hover:bg-yellow-500'  onClick={registerDetails}>Proceed to Pay</button>
          </div>
          {error ? (<div className=' text-red-600 text-base'>{error}</div>):null}
       </div>
    </div>
   </div>
   {/* <Footer/> */}
   </>
  )
}

export default SignReg


//disabled={!name || !email || !gradYear || !phNumber || !college}
//k6BjV7JI90%%$l