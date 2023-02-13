import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../shared/Button';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
  const handleBrain = ()=>{
     router.push("/event/Events")
  }
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Events', link: '/event/Events' },
    { name: 'Register', link: '/register' },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-7' onClick={handleBrain}>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white '>
          <span className='text-3xl text-white font-light mr-1 pt-2'>
            <img className='h-9 w-9' src="https://www.linkpicture.com/q/IMG-20230213-WA0016.jpg" alt="" />
          </span>
          <p className='ml-2 font-thin text-2xl text-yellow-500'>B</p>
          <p className='font-thin text-2xl '>rain</p>
          <p className='font-thin text-2xl text-yellow-500'>S</p>
          <p className='font-thin text-2xl '>train</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-3.5 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'} className=''></ion-icon>
        </div>

        <ul
          className={`font-medium  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${
            open ? 'top-16 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link href={link.link} as={link.link} legacyBehavior>
                <a className='text-white font-light hover:text-yellow-500 duration-500 '>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          {/* <button
             className="border-2  p-3 text-center bg-red-300 rounded-md"
             onClick={handleChange}>
              Get Started
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
