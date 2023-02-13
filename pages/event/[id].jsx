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
     router.push("/SignReg")
   }
  
  console.log("specificEvent", data )
  const { id } = router.query;
  console.log(id);
  // Get the event details based on the id
  
 
  
  const event = data.find(item => item.link == id);
 console.log("event", event.description)
return (    
       <div>
            <div className="w-full justify-center flex items-center bg-gradient-to-r from-[#FF9500] via-[#FFC300] to-[#FFEA00]" > 
             <div className="">
               <div><Navbar/></div>
         
               
               <div className='mt-20 sm:mt-30'> 
        {/*Event Details */}
                    <div className=''>
                      <div>
                        {/*Event Heading */}
                        <div className=''>
                        <h1 className='text-4xl font-bold text-center text-white uppercase md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl' style={{ fontFamily: '"Vampire Wars", sans-serif' }} >{event.eventName} </h1>
                        </div>

                              
                       <div className="">
                         <div className='flex-row justify-center max-w-lg gap-4 p-4 mx-auto mt-10 text-black bg-yellow-100 rounded-md sm:max-w-md md:flex'> 
                        <div className='flex'>
                          <div> <LocationOnIcon/></div> 
                          <div>
                            <div className='font-bold'> Location </div>  
                            <div className='font-base'>{event.location}</div>
                          </div>
                        </div>
                        <div className='flex'> 
                          <div><EmojiEventsOutlinedIcon/></div>
                            <div>
                            <div className='font-bold'>Prize</div>  
                            <div className='font-base'>₹{event.price}</div>
                          </div>
                        </div>
                        <div className='flex'> 
                          <div><LocalPhoneOutlinedIcon style={{height:"24px", width:"20px"}}/></div>
                            <div>
                            <div className='font-bold'>Phone</div>  
                            <div className='font-base'>₹{event.rules.Contact.Phone}</div>
                          </div>
                        </div>
                        <div className='w-32 p-4 text-center text-white bg-red-500 rounded-md' onClick={handleClick}>
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
                                                <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>{event.description}</div>
                                </div>
                            {/*Event Rules */}    
                                <div className='text-black'>
                                  <div className='my-5 text-lg font-bold text-white xl:text-3xl 2xl:text-3xl lg:2xl md:2xl sm:lg'>
                                    Rules:
                                  </div>
                                  {
                                    event.rules.Prelims && (
                                      <div className='text-sm font-semibold leading-7 xl:text-xl 2xl:text-xl md:text-lg lg:text-lg sm:text-base 2xl:leading-10 xl:leading-10 lg:leading-9 md:leading-8'>
                                      <div className=''>{event.rules.Prelims.PrelimsDetails}</div>
                                      <div className=''>{event.rules.Finals.FinalsDetails}</div>
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

