import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../shared/Button';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Event', link: '/event/Events' },
    { name: 'Register', link: '/register' },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 '>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <img className='' />
          </span>
          <p className='ml-1 font-medium'>Literary And Debating Society</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-3.5 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`font-medium  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link href={link.link} as={link.link} legacyBehavior>
                <a className='text-gray-800 hover:text-red-600 duration-500'>
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
