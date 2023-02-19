import React, { useState } from 'react'
import { useRouter } from 'next/router';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Navbar from '../shared/Navbar';
import {addDoc,collection,doc,serverTimestamp,updateDoc} from "@firebase/firestore";
import { db } from '../firebase';
import Footer from "../shared/Footer.jsx"
import { useSession } from 'next-auth/react';
import Login from '../components/Login';
import Loginpage from './login';
import LoadingScreen from '../components/LoadingScreen';
const SignReg = () => {
  const { data: session } = useSession();
  console.log('session',session)
  const router = useRouter();
  const [loading,setLoading]=useState(false)
  const [name,setname]=useState('');
  const [email,setEmail]=useState('');
  const [college,setCollege]=useState('');
  const [gradYear,setGradYear]=useState('');
  const[phNumber,setPhNumber]=useState('');
  const [error,seterror]=useState('')
  const [quizSelect,setQuizSelect]=useState(false);
  const [poemSelect,setPoemSelect]=useState(false);
  const [microtaleSelect,setMicrotaleSelect]=useState(false);
  const [unominutoselect,setUnominutoSelect]=useState(false);
  const [jamSelect,setJamSelect]=useState(false);
  const [shipwreckSelect,setShipwreckSelect]=useState(false);
  const [potpourriSelect,setpotpourriSelect]=useState(false);
  const [dumbCSelect,setDumbCSelect]=useState(false);
  const [puzzleSelect,setPuzzleSelect]=useState(false);
  console.log('quizSelect',quizSelect)
  if(!session){
    return <Loginpage/>
  }
  if(loading){
    return <LoadingScreen/>
  }
 async function registerDetails(){
 setLoading(true)
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
      quizSelect:quizSelect,
      poemSelect:poemSelect,
      microtaleSelect:microtaleSelect,
      unominutoselect:unominutoselect,
      jamSelect:jamSelect,
      shipwreckSelect:shipwreckSelect,
      potpourriSelect:potpourriSelect,
      dumbCSelect:dumbCSelect,
      puzzleSelect:puzzleSelect,
      sessionname:session.user.name,
      sessionemail:session.user.email,
      timestamp:serverTimestamp()
    }
    console.log('dataaa',Data)
    
      await addDoc(collection(db,'users'),Data)
  }
   setLoading(false)
    router.push("/payment")
  }
  
  return (
    <>
   <div>
      <div><Navbar/></div>
      <div className="flex justify-center min-h-screen mt-16 mb-16 bg-white rounded-lg align-center" >
       <div className='grid justify-center grid-flow-row px-20 py-10 my-8 space-y-8 align-middle bg-white border-2 rounded-lg shadow-lg md:px-36 '>
         <div className='grid justify-center text-2xl font-normal'>
           Register
         </div>
         <div className=''>
          <label className='font-medium text-yellow-500'>
            Name
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="person-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none " value={name} onChange={e=>setname(e.target.value)}  placeholder="Type Your Name"  required />
            </div>
         </div>
         <div className=''>
          <label className='font-medium text-yellow-500'>
            Email-Id
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2 '>
             <ion-icon name="mail-outline"></ion-icon>
            </div>
               <div className='flex flex-row'>
                 <input type="email" className="outline-none " value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Type Your Email-Id" required />
                 <p>(Only give your professional email id)</p>
               </div>
            </div>
         </div>
         <div className=''>
          <label className='font-medium text-yellow-500'>
            College Name
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="book-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none " value={college} onChange={e=>setCollege(e.target.value)}  placeholder="Type Your College Name" required />
            </div>
         </div>
         <div className=''>
          <label className='font-medium text-yellow-500'>
            Year of Graduation
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="library-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none " value={gradYear} onChange={e=>setGradYear(e.target.value)}  placeholder="Type Your Year of Graduation" required />
            </div>
         </div>
         <div className=''>
          <label className='font-medium text-yellow-500'>
            Phone Number
          </label>
           <div className='flex flex-row border-b border-slate-400' >
            <div className='mt-1.5 pr-2'>
             <ion-icon name="call-outline"></ion-icon>
            </div>
             <input type="text" className="outline-none" value={phNumber} onChange={e=>setPhNumber(e.target.value)} placeholder="Type Your Phone Number" required />
            </div>

         </div>
         <div className='grid grid-flow-row grid-cols-2 text-sm md:text-base'>
         <div className='flex justify-between m-2 '>
          <label className='font-medium text-yellow-500'>
              Quiz
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={quizSelect} onChange={e=>setQuizSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
              Poem 
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={poemSelect} onChange={e=>setPoemSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
              Puzzle
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={puzzleSelect} onChange={e=>setPuzzleSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
              Potpourri
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={potpourriSelect} onChange={e=>setpotpourriSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
              Dumb Charades
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={dumbCSelect} onChange={e=>setDumbCSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
             Shipwreck
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={shipwreckSelect} onChange={e=>setShipwreckSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
              Jam
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={jamSelect} onChange={e=>setJamSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
           Uno Minuto
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={unominutoselect} onChange={e=>setUnominutoSelect(!quizSelect)}/>
         </div>
         <div className='flex justify-between m-2'>
          <label className='font-medium text-yellow-500'>
              Microtale
            </label>
            <input type='checkbox' className='p-1 m-2 text-base cursor-pointer ' value={microtaleSelect} onChange={e=>setMicrotaleSelect(!quizSelect)}/>
         </div>

         </div>
         <div className='grid justify-center'>
            <button className='p-3 text-center text-white duration-500 bg-gray-800 border-2 rounded-md hover:bg-yellow-500'  onClick={registerDetails}>Proceed to Pay</button>
          </div>
          {error ? (<div className='text-base text-red-600 '>{error}</div>):null}
       </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default SignReg


//disabled={!name || !email || !gradYear || !phNumber || !college}
//k6BjV7JI90%%$l