import React from 'react';
import data from "../../Components/EventData";

const Cards = () => {


  return (
    <>
    <div className='grid gap-10 mt-8 lg:grid-cols-3'>
    {data.map((item)=>{    
    return(
      <a href={item.link}>
       <div className=  'w-64 p-4 ml-20 overflow-hidden bg-white rounded-md shadow-md lg:ml-20 md:w-80'>
    <img className='object-cover w-48 ml-4 md:w-32 lg:w-64 ' src={item.src} alt="Event Image" />
    <div className='m-4'>
      <span className='font-bold tracking-wider text-white'>{item.eventName}</span>
      <span className='block text-sm text-grey-500'>{item.Time}</span>
     </div>
    </div> 
    </a>)
      })}
    </div>
    </>
  )
}

export default Cards
