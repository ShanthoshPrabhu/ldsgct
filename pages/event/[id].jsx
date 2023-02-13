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
  
  const handleReturn = () => {
    router.push("/event/Events")
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
            <div className="flex items-center justify-center w-full mt-8 bg-white" > 
             <div className="">
               <div><Navbar/></div>
               
              
               <div className='mt-10 mb-40'> 
        {/*Event Details */}
                    <div className=''>
                      <div>
                        {/*Event Heading */}
                        <div className=''>
                        <img src="/return.png" alt="return" className="mx-4 cursor-pointer md:mx-16 lg:mx-36" onClick={handleReturn}></img>
                        <h1 className='text-4xl font-light text-center md:text-6xl' >{event?.eventName} </h1>
                        </div>
                       <div className="">
                         <div className='flex-row justify-center max-w-2xl gap-4 p-4 mx-20 mt-10 bg-gray-800 rounded-lg shadow-lg shadow-yellow-700 md:flex md:mx-auto'> 
                        <div className="flex p-2 text-yellow-500 md:mr-3"> 
                          <div><LocationOnIcon/></div>
                            <div>
                            <div className='font-semibold'>Location</div>  
                            <div className='font-base'>{event.location}</div>
                          </div>
                        </div>
                        <div className="flex p-2 text-yellow-500" > 
                          <div><EmojiEventsOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Prize</div>  
                            <div className='font-base'>₹{event?.price}</div>
                          </div>
                        </div>
                        <div className="flex p-2 text-yellow-500"> 
                          <div><LocalPhoneOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Phone</div>  
                            <div className='font-base'>{event.contact.Phone}</div>
                          </div>
                        </div>
                        <div className="flex p-2 text-yellow-500 "> 
                          <div><CalendarTodayOutlinedIcon/></div>
                            <div>
                            <div className='font-semibold'>Date</div>  
                            <div className='font-base'>{event.date}</div>
                          </div>
                        </div>
                        <div className='p-2 mt-5 text-center text-black bg-white rounded-md cursor-pointer w-28 md:w-24 md:h-10 md:ml-12 hover:bg-yellow-500 md:mt-2 md:ml-16' onClick={handleClickReg}>
                          Register
                        </div> */}
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

