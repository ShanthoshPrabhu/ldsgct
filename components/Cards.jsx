import React from 'react';
import data from "../Components/EventData";
import Card from "../Components/Card";
import { useRouter } from 'next/router';
import Image from 'next/image';


const Cards = () => {
   
  const router = useRouter();

  const handleClick = (link) => {
    router.push(`/event/${link}`);
  };


  
  return (
    <>
    <div className='grid gap-10 mt-8 lg:grid-cols-3 md:grid-cols-2'>
    {data.map((item)=>{    
      console.log("item",item)
    return(
       <div onClick={() => handleClick(item.link)} key={item.id}>
          <a>
            <div className=  'w-64 p-4 overflow-hidden bg-white rounded-md shadow-md shadow-yellow-400 cursor-pointer md:w-80'>
              <img className='object-cover w-48 ml-4 md:w-32 lg:w-64 'src={item.src} alt="Event Image" />
              <div className='m-4'>
                <span className='font-bold tracking-wider text-white'>{item.eventName}</span>
                <span className='block text-sm text-grey-500'>{item.Time}</span>
              </div>
            </div> 
          </a>
       </div>
    )
      })}
    </div>
    </>
  )
}

export default Cards
