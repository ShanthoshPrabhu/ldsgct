import React, { useState } from 'react'
import Link from 'next/link'
import Button from '../shared/Button';
import { useRouter } from 'next/router';

const Navbar = () => {
  let Links = [
    { name: 'Home', link:'/'},
    { name: 'Events', link: '/event/Events' },
    // { name: 'Register', link: '/register' },
  ];
  let [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClickRegister = ()=>{
    router.push("/temporaryreg")
  }
  return (
    <div className='fixed top-0 left-0 z-50 w-full shadow-md'>
      <div className='items-center justify-between py-4 bg-gray-800 md:flex md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white '>
          <span className='pt-2 mr-1 text-3xl font-light text-white'>
            <img className='h-9 w-9' src="https://www.linkpicture.com/q/IMG-20230213-WA0016.jpg" alt="" />
          </span>
          <p className='ml-2 text-2xl font-thin text-yellow-500'>B</p>
          <p className='text-2xl font-thin '>rain</p>
          <p className='text-2xl font-thin text-yellow-500'>S</p>
          <p className='text-2xl font-thin '>train</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden text-yellow-500'
        >
          <ion-icon name={open ? 'close' : 'menu'} className="text-white" />
        </div>

        <ul
          className={`font-medium  md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  duration-500 ease-in ${
            open ? 'top-16' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
              <Link href={link.link} as={link.link} legacyBehavior>
                <a className='font-light text-white duration-500 hover:text-yellow-500 '>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          <button
             className="md:ml-8 p-2 text-center bg-white hover:bg-yellow-500  rounded-sm"
             onClick={handleClickRegister}
           >
              Register
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
