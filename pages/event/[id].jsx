import Navbar from '../../shared/Navbar'
import { useRouter } from 'next/router';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Button from "../../shared/Button"
import data from "../../shared/specificdata.json"
import Image from 'next/image';


const EventPage = () => {
    const router = useRouter()
   const handleClick = () => {
     router.push("/register")
   }
  
  console.log("specificEvent", data )
  const { id } = router.query;
  console.log(id);
  // Get the event details based on the id

  const event = data.find(item => item.link == id);
 console.log("event", event)

 if(!event) {
    return (
      <div className="bg-red-500">Loading</div>
    )
 }
return (    
       <div>
            <div className="w-full justify-center flex items-center bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00]" > 
             <div className="">
               <div><Navbar/></div>
               <div className='mt-28 sm:mt-30'> 
        {/*Event Details */}
                    <div className=''>
                      <div>
                        {/*Event Heading */}
                        <div className=''>
                        <h1 className='text-4xl text-center text-white md:text-6xl md:font-light' >{event?.eventName} </h1>
                        </div>

                              
                       <div className="">
                         <div className='flex-row justify-center max-w-3xl gap-4 p-4 mx-auto mt-10 text-black bg-yellow-100 rounded-md sm:max-w-xl md:flex'> 
                        <div className='flex'>
                          <div> <LocationOnIcon/></div> 
                          <div>
                            <div className='font-semibold'> Location </div>  
                            <div className='font-base'>{event?.location}</div>
                          </div>
                        </div>
                        <div className='flex'> 
                          <div><EmojiEventsOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Prize</div>  
                            <div className='font-base'>₹{event?.price}</div>
                          </div>
                        </div>
                        <div className='flex'> 
                          <div><LocalPhoneOutlinedIcon style={{height:"24px", width:"20px"}}/></div>
                            <div>
                            <div className='font-semibold'>Phone</div>  
                            <div className='font-base'>{event.contact.Phone}</div>
                          </div>
                        </div>
                        <div className='flex'> 
                          <div><CalendarTodayOutlinedIcon style={{height:"24px", width:"20px"}}/></div>
                            <div>
                            <div className='font-semibold'>Date</div>  
                            <div className='font-base'>{event.date}</div>
                          </div>
                        </div>
                        <div className='w-32 p-4 text-center text-white bg-red-500 rounded-md cursor-pointer' onClick={handleClick}>
                          Register
                        </div>
                    </div>
                        {/*Event Content */}
                      <div>
                        {/*Event Description and Rules */}
                          <div className="m-10 2xl:m-20 xl:m-20 ">
                            {/*Event Description */}
                                <div className='text-black '>
                                                <div className='mb-5 text-lg font-bold text-white xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>Event Description:</div>
                                                <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>{event?.description}</div>
                                </div>
                            {/*Event Rules */}    
                                <div className='text-black'>
                                  <div className='my-5 text-2xl font-bold text-white xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>
                                    Rules:
                                  </div>
                               
                                  {
                                    event.rules.prelims && (
                                    <div>     
                                      <div className='text-lg font-bold text-white'>Prelims:</div>
                                      <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                       <ol>
                                          {event?.rules.prelims.map((item, index) => (
                                            <li key={index} className="pl-5 p-y-1">{item}</li>
                                          ))}
                                        </ol>
                                      </div></div>
                                    )
                                  }
                                  
                                  {
                                       event.rules.finals && (
                                     <div>
                                         <div  className='text-lg font-bold text-white'>Finals:</div>
                                      <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                       <ol>
                                          {event?.rules.finals.map((item, index) => (
                                            <li key={index} className="pl-5 p-y-1">{item}</li>
                                          ))}
                                        </ol>
                                      </div>
                                     </div>
                                    )
                                  }

                                  {
                                       event.rules.rounds && (
                                     <div>
                                         {/* <div  className='text-lg font-bold text-white'>Finals:</div> */}
                                      <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                       <ol>
                                          {event?.rules.rounds.map((item, index) => (
                                            <li key={index} className="pl-5 p-y-1">{item}</li>
                                          ))}
                                        </ol>
                                      </div>
                                     </div>
                                    )
                                  }
                              </div>
                        </div>

                      </div>
                       </div>
                              
                            
                    </div>
                    </div>
               </div>
              </div> 
            </div>
       </div>
);
}


export default EventPage;

