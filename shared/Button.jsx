import React from 'react'

const Button = (props) => {

  return (
    <button className='bg-yellow-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400  
    duration-500'>
      {props.children}
    </button>
  )
}
