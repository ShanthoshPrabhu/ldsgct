import { useRouter } from 'next/router';
//import data from '../../Components/EventData';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Button from "../../shared/Button"
import data from "../../shared/specificdata.json"
import Image from 'next/image';
import Navbar from '../../shared/Navbar'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useState } from 'react';

const EventPage = ({queryId}) => {

const router = useRouter();
const { id } = router.query;
const event = data.find(item => item.link == id);

if (!event) {
  console.error("Event not found for id:", id);
  return <p>Loading</p>;
}

return (    
      //  <div>
      //       <div>
      //           <div className='flex justify-center min-h-screen mx-auto text-white'> 
      // {/*Bg Image*/}
      //               <div className='relative  opacity-[.5] min-h-screen max-w-screen' style={{backgroundImage: `url(${event.bs})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      //                 <img src={event.bs} alt="" className='' />
      //               </div>
      //   {/*Event Details */}
      //               <div className='absolute'>
      //                 <div>
      //                   {/*Event Heading */}
      //                   <div className=''>
      //                   <h1 className='text-4xl font-bold text-center text-red-900 md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl' style={{ fontFamily: '"Vampire Wars", sans-serif' }} >{event.eventName} </h1>
      //                   </div>
      //                   {/*Event Content */}
      //                 <div>
      //                   {/*Event Description and Rules */}
      //                     <div className="m-10 2xl:m-20 xl:m-20 ">
      //                       {/*Event Description */}
      //                           <div className='text-black '>
      //                                           <div className='font-bold text-red-900 text-lg mb-5 xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>Event Description:</div>
      //                                           <div className='text-sm xl:text-xl 2xl:text-xl md:text-lg lg:text-lg  sm:text-base font-semibold leading-7 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>{event.description}</div>
      //                           </div>
      //                       {/*Event Rules */}    
      //                           <div className='text-black'>
      //                             <div className='font-bold text-red-900 text-lg my-5 xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>
      //                               Rules:
      //                             </div>
      //                             {
      //                               event.rules.Prelims && (
      //                                 <div className='text-sm xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base font-semibold leading-7 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
      //                                 <div className=''>{event.rules.Prelims.PrelimsDetails}</div>
      //                                 <div className=''>{event.rules.Finals.FinalsDetails}</div>
      //                                 </div>
      //                               )
      //                             }
      //                         </div>
      //                   </div>

      //                 </div>
                              
                            
      //               </div>
      //               </div>
      //           </div>
      //       </div>
      //       <div>
      //         Hi
      //       </div>
      //  </div>
      <div className='m-20 '>
      <div className='text-6xl font-base'>
       {event.eventName}
      </div>
      <div className='grid grid-cols-2 mt-10'>
        <div className='grid grid-flow-row'>
          <div className='grid grid-cols-2 '>
            <div className='flex flex-row border border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center'>
              <div className='pb-1'><LocationOnIcon /></div>
              <div>{event.location}</div>
            </div>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2' >
              <div className='pb-1'><CalendarTodayOutlinedIcon /></div>
              <div>{event.date}</div>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-8 '>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2'>
              <div className='pb-1'><AccessTimeOutlinedIcon /></div>
              <div>Time: Yet to be specified</div>
            </div>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2' >
              <div className='mb-2'><LocalPhoneOutlinedIcon /></div>
              <div>Phone Number</div>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-8'>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2'>
              <div className='pb-4'><EmojiEventsOutlinedIcon /></div>
              <div>{event.price}</div>
            </div>
          </div>
          <div className='mt-8'>
            <button className='p-3 text-center text-white duration-500 border-2 rounded-md bg-gradient-to-r from-red-200 to-red-500 hover:bg-yellow-500'>Register</button>
          </div>
        </div>
        {/* fuck */}
        <div className='grid grid-flow-row'>
          <div className='font-base'>


          </div>
          <div className='font-semibold'>Guidelines</div>
          <div className='font-semibold'>Rules and Regulations</div>
          <div className='font-semibold'>Prizes</div>
        </div>
      </div>
    </div>

);
}




export default EventPage;


