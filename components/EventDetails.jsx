import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Button from '../shared/Button';

const EventDetails = () => {
  return (
    <div className='m-20 '>
      <div className='text-6xl font-base'>
        JAM
      </div>
      <div className='grid grid-cols-2 mt-10'>
        <div className='grid grid-flow-row'>
          <div className='grid grid-cols-2 '>
            <div className='flex flex-row border border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center'>
              <div className='pb-1'><LocationOnIcon /></div>
              <div>Location</div>
            </div>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2' >
              <div className='pb-1'><CalendarTodayOutlinedIcon /></div>
              <div>Date</div>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-8 '>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2'>
              <div className='pb-1'><AccessTimeOutlinedIcon /></div>
              <div>Time</div>
            </div>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2' >
              <div className='mb-2'><LocalPhoneOutlinedIcon /></div>
              <div>Phone Number</div>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-8'>
            <div className='flex flex-row  border-white shadow-md mr-8 ml-8 pt-10 pb-10 justify-center gap-2'>
              <div className='pb-4'><EmojiEventsOutlinedIcon /></div>
              <div>Price Amount</div>
            </div>
          </div>
          <div className='mt-8'>
            <Button>Login to Register</Button>
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
  )
}

export default EventDetails