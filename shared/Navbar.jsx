import React, { useState } from 'react'
// import Button from '../Components/Button';

const Navbar = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Brainstrain",link:"/event/Events"},
      {name:"About",link:"/about"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='fixed top-0 left-0 w-full border-white shadow-md border-y-2'>
      <div className='items-center justify-between py-4 text-white bg-black md:flex md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 '>
        <span className='pt-2 mr-1 text-3xl text-indigo-600'>
        <img className='' />
        </span>
       <p className='ml-1 font-medium text-white'>Literary And Debating Society</p> 
      </div>
      
      <div onClick={()=>setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`font-medium  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <a href={link.link} className='text-white duration-500 hover:text-yellow-600'>{link.name}</a>
            </li>
          ))
        }
        <button>
          Get Started
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar