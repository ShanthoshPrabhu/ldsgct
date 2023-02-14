import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer';
import { async } from '@firebase/util';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';

const Payment = () => {
  const [showToast, setShowToast] = useState(false);
  const [file, setFile] = useState(null);
  const [user,setUser]=useState([])
  const { data: session } = useSession();
  console.log('user',user)
  // if(!session){
  //   return <Login/>
  // }
  useEffect(()=>{
   getUsers();
  },[])
  async function getUsers(){
    const userRef = collection(db, "users");
    
    getDocs(userRef).then((snapshot)=>{
      // console.log('snapshot.docs',snapshot.docs)
      let value=[]
      snapshot.docs.forEach((doc)=>{
        value.push({...doc.data(),userId:doc.id})
      })
      // console.log('value',value)
      const usercheck = value?.filter(filteredusers =>filteredusers?.sessionemail == session?.user?.email)
      console.log('check',usercheck)
     if(usercheck && usercheck[0]){
      return setUser(usercheck[0]);
     } 
    })
    
   }
  const router = useRouter()
//  console.log('file',file)
  function addImage (e) {
    const reader = new FileReader();
  //  console.log(e)
   if (e.target.files[0]) {
    reader.readAsDataURL(e.target.files[0]);
  }
  console.log('red',reader)
  reader.onload = (readerEvent) => {
    console.log('readerEvent.target.result',readerEvent.target.result)
    setFile(readerEvent.target.result)
  }
  // console.log(file)
  console.log('file',file)
}
async function uploadData(){
  const imageRef = ref(storage, `payments/${session?.user.email}/image`);
  console.log('imgref',imageRef)
    if (file) {
        await uploadString(imageRef, file, "data_url")
        .then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, "users",user.userId ), {
            image: arrayUnion(downloadURL),
          });
        });
     console.log('success')
     router.push('/verificationOnline')
      }
}
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
       <input type="file" id="file-input"  onChange={(e)=>addImage(e)}  />
        <button  
        className=" text-white mt-5 bg-gradient-to-r  from-[#FF9500] via-[#FFC300] to-[#FFEA00] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={uploadData} 
         >Submit</button>
         {showToast && (
          <div className="fixed p-4 mb-4 mr-4 text-white bg-gray-800 rounded-lg shadow-lg bottom-20">
            <p>Thanks for Registering, we will contact you after verifying.</p>
          </div>
           )}
        </div>
        <div  className='flex flex-col items-center justify-center p-10 mx-12 bg-gray-100 border rounded-lg shadow-2xl w-[280px] md:w-[300px] h-120'>
          <img src="/verify.jpeg" alt="verfication" height="100" width="200"/>
          <p className="mt-2 text-xl font-semibold text-center ">Upload your payment screenshot for verification</p>
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
     <Footer/>
    </>

  )
}

export default Payment