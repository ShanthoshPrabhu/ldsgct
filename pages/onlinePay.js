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
  const [fileName,setFileName]=useState('')
  console.log('user',user)
  const [loading,setLoading]=useState(false)

//   if(loading){
//     return <LoadingScreen/>
//   }
  if(user.length === 0){
    getUsers();
  }
//   useEffect(()=>{
//     getUsers();
//   },[])
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
//   console.log('e.target.files',e.target.files[0].name)
   if (e.target.files[0]) {
    // console.log('e.target.files[0]',e.target.files[0].name)
    setFileName(e.target.files[0].name)
    reader.readAsDataURL(e.target.files[0]);
  }
  console.log('red',reader)
  reader.onload = (readerEvent) => {
    console.log('readerEvent.target.result',readerEvent.target.result)
    setFile(readerEvent.target.result)
  }
  // console.log(file)
  console.log('file',file)
  console.log('name',fileName)
}
// const ref = session.user.email + fileName

function copyToClipboard(){
   navigator.clipboard.writeText(upiId)
}

const [upiId,setUpiId] = useState("harishhar2304@oksbi")

async function uploadData(){
    setLoading(true)
  const imageRef = ref(storage, `payments/${session?.user.email + fileName} `);
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
      }
      setLoading(false)
      router.push('/verificationOnline')
}
  return (
    <> 
    <Navbar/>
    <div className='flex items-center justify-center min-h-screen mt-16 bg-white'>   
     <div className='container' >
        <div className='flex items-center justify-center h-16 mt-10 text-3xl font-light text-gray-800 md:text-5xl md:font-base'>
            Online Mode Payment
       </div>
      
       <div class=" text-center pt-4 lg:px-4 rounded-lg w-lg mt-6">
          <div class="p-2 bg-yellow-600 items-center text-white leading-none rounded-lg flex lg:inline-flex mx-10 md:mx-0" role="alert">
            <span class="flex rounded-full bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3">Pay</span>
            <span class="font-semibold mr-2 text-left flex-auto">!!Use any one of the below payment methods to make the payment 
As you have availed the early bird offer, pay Rs 150 (applicable until 18/02/2023)
Once the payment is done, take a screenshot of the payment in a manner that the transaction ID is visible clearly (example given below). Upload the screenshot here</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </div> 
      
  
      <div className='grid justify-around grid-flow-row md:grid-flow-col'>
      <div 
      className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-row gap-y-24 md:gap-x-24 mt-14 md:mt-10 '>
       <div className='flex flex-col items-center justify-center h-48 p-6 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-500 sm:h-56 w-72 sm:w-96 '>
        <img src="/qr.jpeg" alt="QR_Code" className="overflow-hidden"/>
         <div className='mt-4 font-light text-center text-yellow-500' >Scan the QR Code to pay</div>
        </div>
        <div className='flex flex-col items-center justify-center h-48 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-500 sm:h-56 w-72 sm:w-96'>
        <img src="/UPI-Color.png" alt="" width="150" height="150" className="mb-4"/>
        <p className="mb-4 text-yellow-500 text-light "> {upiId} </p>
         <div className='font-bold text-center text-yellow-500'>
          <button onClick={copyToClipboard} >Use this UPI ID</button>
          </div>
            {showToast && (
            <div class="fixed bottom-0 mb-40 mr-4 p-4 bg-gray-800 rounded-lg text-white shadow-lg">
              <p>Copied.</p>
            </div>
            )}
        </div>
        <div className='flex flex-col items-center justify-center h-48 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-500 sm:h-56 w-72 sm:w-96'>
        <div className='mb-4 text-xl font-light text-center text-yellow-500'>89252 34490</div>
         <div className='h-10 font-bold text-center text-yellow-500'>
          Pay through Phone Number
          </div>
         <div className='h-10 font-light text-center text-white'>You can pay the registration fee to this number</div>
         
        </div>
       </div> 
        <div className='grid justify-center grid-flow-row cursor-pointer md:grid-flow-row gap-y-24 md:gap-x-24 mt-14 md:mt-10'>
       <div className='flex flex-col items-center justify-center h-48 p-10 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-500 sm:h-56 w-72 sm:w-96'>
       <input type="file" id="file-input"  onChange={(e)=>addImage(e)} className="mx-auto text-yellow-500 md:mx-auto md:ml-8" />
        <button  
        className=" text-black mt-5 bg-yellow-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        disabled={loading}
        onClick={uploadData} 
         >Submit</button>
         {showToast && (
          <div className="fixed p-4 mb-4 mr-4 text-white bg-gray-800 rounded-lg shadow-lg bottom-20">
            <p>Thanks for Registering, we will contact you after verifying.</p>
          </div>
           )}
        </div>
        <div  className='flex flex-col items-center justify-center p-10 mx-12 bg-gray-800 border rounded-lg shadow-md shadow-yellow-500 w-[280px] md:w-[300px] h-120'>
          <img src="https://www.linkpicture.com/q/IMG-20230214-WA0002.jpg" alt="verfication" height="100" width="200"/>
          <p className="mt-2 text-xl font-normal text-center text-yellow-500">Upload your payment screenshot for verification with you UPI transaction ID and Name</p>
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