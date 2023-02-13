import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../shared/Button';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Events', link: '/event/Events' },
    { name: 'Register', link: '/register' },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 z-0 w-full shadow-md'>
      <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 '>
          <span className='pt-2 mr-1 text-3xl text-indigo-600'>
            <img className='' />
          </span>
          <p className='ml-1 font-medium'>BrainStrain</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`font-medium  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <Link href={link.link} as={link.link} legacyBehavior>
                <a className='text-gray-800 duration-500 hover:text-red-600'>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          {/* <button
             className="p-3 text-center bg-red-300 border-2 rounded-md"
             onClick={handleChange}>
              Get Started
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
