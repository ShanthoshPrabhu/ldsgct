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

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Navbar from '../../shared/Navbar';

const EventPage = ({queryId}) => {

const router = useRouter();
const { id } = router.query;
const event = data.find(item => item.link == id);

if (!event) {
  console.error("Event not found for id:", id);
  return <p>Loading</p>;
}

return (    
  <>
  <Navbar/>
    <div className='mt-20 '>
       <div>
      <div className='font-light sm:font-light text-center text-5xl md:text-6xl md:mb-20'>
       {event.eventName}
      </div>
      <div className='grid grid-flow-row md:gap-0 md:grid-cols-2 md:mb-10 mt-10 justify-center items-center'>
        
        {/* <div>
          <div className='grid grid-flow-row order-last md:order-none'>   
            <div className='grid grid-cols-2 justify-center items-center gap-16'>
              <div className='flex flex-row border border-white shadow-md md:mr-8 md:ml-8 md:pt-10 md:pb-10  w-32 h-16 justify- items-center md:w-auto md:h-auto'>
                <div className='h-6'><LocationOnIcon /></div>
                <div>{event.location}</div>
              </div>
              <div className='flex flex-col border border-white shadow-md md:mr-8 md:ml-8 md:pt-10 md:pb-10  w-32 h-16 justify-center items-center md:w-auto md:h-auto' >
                <div className='pb-1'><CalendarTodayOutlinedIcon /></div>
                <div>{event.date}</div>
              </div>
            </div>
            <div className='grid grid-cols-2 justify-center items-center gap-16'>
              <div className='flex flex-row border border-white shadow-md md:mr-8 md:ml-8 md:pt-10 md:pb-10  w-32 h-16 justify-center items-center md:w-auto md:h-auto'>
                <div className='pb-1'><AccessTimeOutlinedIcon /></div>
                <div>Time: Yet to be specified</div>
              </div>
              <div className='flex flex-row border border-white shadow-md md:mr-8 md:ml-8 md:pt-10 md:pb-10  w-32 h-16 justify-center items-center md:w-auto md:h-auto' >
                <div className='mb-2'><LocalPhoneOutlinedIcon /></div>
                <div>Phone Number</div>
              </div>
            </div>
            <div className='grid grid-cols-2 justify-center items-center gap-16'>
              <div className='flex flex-row border border-white shadow-md md:mr-8 md:ml-8 md:pt-10 md:pb-10  w-32 h-16 justify-center items-center md:w-auto md:h-auto'>
                <div className='pb-4'><EmojiEventsOutlinedIcon /></div>
                <div>{event.price}</div>
              </div>
            </div>
          </div>
          <div className='grid grid-flow-row'>
            <div className='font-semibold'>Guidelines</div>
            <div className='font-semibold'>Rules and Regulations</div>
            <div className='font-semibold'>Prizes</div>
          </div>
        </div> */}
      </div>


      <div className='mt-8'>
       <button className='p-3 text-center text-white duration-500 border-2 rounded-md bg-gradient-to-r from-red-200 to-red-500 hover:bg-yellow-500'>Register</button>
      </div>

       </div>
    </div>
 </>
);
}




export default EventPage;


