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
import Footer from '../../shared/Footer';


const EventPage = () => {
    const router = useRouter()
   const handleClickReg = () => {
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
     <>
       <div>
            <div className="w-full justify-center flex items-center bg-white mt-8" > 
             <div className="">
               <div><Navbar/></div>
               <div className='mt-20 sm:mt-30 mb-40'> 
        {/*Event Details */}
                    <div className=''>
                      <div>
                        {/*Event Heading */}
                        <div className=''>
                        <h1 className='text-4xl text-center md:text-6xl font-light' >{event?.eventName} </h1>
                        </div>
                       <div className="">
                         <div className='flex-row justify-center max-w-3xl gap-4 p-4 mt-10 bg-gray-800 shadow-lg shadow-yellow-700  rounded-lg  md:flex mx-20 md:mx-auto'> 
                        <div className="text-yellow-500 flex p-2 md:mr-3"> 
                          <div><LocationOnIcon/></div>
                            <div>
                            <div className='font-semibold'>Location</div>  
                            <div className='font-base'>{event.location}</div>
                          </div>
                        </div>
                        <div className="text-yellow-500 flex p-2" > 
                          <div><EmojiEventsOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Prize</div>  
                            <div className='font-base'>₹{event?.price}</div>
                          </div>
                        </div>
                        <div className="text-yellow-500 flex p-2"> 
                          <div><LocalPhoneOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Phone</div>  
                            <div className='font-base'>{event.contact.Phone}</div>
                          </div>
                        </div>
                        <div className="text-yellow-500 flex p-2 "> 
                          <div><CalendarTodayOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Date</div>  
                            <div className='font-base'>{event.date}</div>
                          </div>
                        </div>
                        <div className='w-28 p-2 md:w-24 md:h-10  text-center text-black bg-white hover:bg-yellow-500 rounded-md cursor-pointer mt-5 md:mt-2 md:ml-16' onClick={handleClickReg}>
                          Register
                        </div>
                    </div>
                        {/*Event Content */}
                      <div>
                        {/*Event Description and Rules */}
                          <div className="m-10 mt-10 md:mt-28 2xl:mx-40 xl:mx-40">
                            {/*Event Description */}
                                <div className='text-black '>
                                                <div className='mb-5 text-2xl font-semibold text-yellow-500 uppercase xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>Event Description:</div>
                                                <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>{event?.description}</div>
                                </div>
                            {/*Event Rules */}    
                                <div className='text-black'>
                                  <div className='my-5 text-2xl font-semibold text-yellow-500 uppercase xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>
                                    Rules:
                                  </div>
                               
                                  {
                                    event.rules.prelims && (
                                    <div className="m-2">     
                                      <div className='text-lg text-black uppercase font-base md:text-2xl'>Prelims:</div>
                                      <div className='ml-8 text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                       <ol className='m-2 list-disc'>
                                          {event?.rules.prelims.map((item, index) => (
                                            <li key={index} className="">{item}</li>
                                          ))}
                                        </ol>
                                      </div></div>
                                    )
                                  }
                                  
                                  {
                                       event.rules.finals && (
                                      <div className="m-2">     
                                      <div className='text-lg text-black uppercase font-base md:text-2xl'>Finals:</div>
                                      <div className='ml-8 text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                       <ol className='m-2 list-disc '>
                                          {event?.rules.finals.map((item, index) => (
                                            <li key={index} className="">{item}</li>
                                          ))}
                                        </ol>
                                      </div></div>
                                    )
                                  }

                                  {
                                       event.rules.rounds && (
                                   <div className="m-2">     
                                      {/* <div className='text-lg text-yellow-500 uppercase font-base'>Finals:</div> */}
                                      <div className='ml-8 text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                       <ol className='m-2 list-disc'>
                                          {event?.rules.rounds.map((item, index) => (
                                            <li key={index} className="">{item}</li>
                                          ))}
                                        </ol>
                                      </div></div>
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
       <Footer/>
       </>
);
}


export default EventPage;

