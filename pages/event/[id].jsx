import { useRouter } from 'next/router';
//import data from '../../Components/EventData';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Button from "../../shared/Button"
import data from "../../shared/specificdata.json"

const EventPage = () => {
  console.log("specificEvent", data )
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  // Get the event details based on the id
  
  const event = data.find(item => item.link == id);
 console.log("event", event)
  return (
    // <div className="bg-red-500">
    //   {event && ( 
    //     <>
    //         <div className='m-20 '>
    //   <div className='text-6xl font-base'>
    //     JAM
    //   </div>
    //   <div className='grid grid-cols-2 mt-10'>
    //     <div className='grid grid-flow-row'>
    //       <div className='grid grid-cols-2 '>
    //         <div className='flex flex-row justify-center pt-10 pb-10 ml-8 mr-8 border border-white shadow-md'>
    //           <img src={event.src} alt="" />
    //           <div className='pb-1'><LocationOnIcon /></div>
    //           <div>Location</div>
    //         </div>
    //         <div className='flex flex-row justify-center gap-2 pt-10 pb-10 ml-8 mr-8 border-white shadow-md' >
    //           <div className='pb-1'><CalendarTodayOutlinedIcon /></div>
    //           <div>Date</div>
    //         </div>
    //       </div>
    //       <div className='grid grid-cols-2 mt-8 '>
    //         <div className='flex flex-row justify-center gap-2 pt-10 pb-10 ml-8 mr-8 border-white shadow-md'>
    //           <div className='pb-1'><AccessTimeOutlinedIcon /></div>
    //           <div>Time</div>
    //         </div>
    //         <div className='flex flex-row justify-center gap-2 pt-10 pb-10 ml-8 mr-8 border-white shadow-md' >
    //           <div className='mb-2'><LocalPhoneOutlinedIcon /></div>
    //           <div>Phone Number</div>
    //         </div>
    //       </div>
    //       <div className='grid grid-cols-2 mt-8'>
    //         <div className='flex flex-row justify-center gap-2 pt-10 pb-10 ml-8 mr-8 border-white shadow-md'>
    //           <div className='pb-4'><EmojiEventsOutlinedIcon /></div>
    //           <div>Price Amount</div>
    //         </div>
    //       </div>
    //       <div className='mt-8'>
    //         {/* <Button>Login to Register</Button> */}
    //       </div>
    //     </div>
    //     {/* fuck */}
    //     <div className='grid grid-flow-row'>
    //       <div className='font-base'>


    //       </div>
    //       <div className='font-semibold'>Guidelines</div>
    //       <div className='font-semibold'>Rules and Regulations</div>
    //       <div className='font-semibold'>Prizes</div>
    //     </div>
    //   </div>
    // </div>
    //       {/* Display other details of the event here */}
    //     </>
    //   )}
    // </div>
    <div className='bg-white'>
      <div>
         <div className=''>
           <div className='flex max-w-lg gap-20 mx-auto mt-[25%] bg-red-100 '> 
              <div className='flex'>
                <div> <LocationOnIcon/></div> 
                <div> Location </div>  
              </div>
              <div className='flex'> 
                <div><EmojiEventsOutlinedIcon/></div>
                <div>Prize</div>
              </div>
               <div className='flex'> 
                <div><CalendarTodayOutlinedIcon style={{height:"24px", width:"20px"}}/></div>
                <div>Date</div>
              </div>
              <div className='w-24 text-center text-white bg-red-500 rounded-md '>Register</div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default EventPage;



