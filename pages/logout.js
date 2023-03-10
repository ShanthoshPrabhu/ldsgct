import { signOut } from 'next-auth/react'
import React from 'react'

function logout() {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48 min-h-screen bg-black">
     <div>      
        <button
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-[150px]"
        onClick={() => signOut()}
        >
        <span className="w-48 h-48 rounded rotate-[-40deg]  bg-yellow-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Logout
        </span>
        </button>
    </div>
    </div>
  )
}

export default logout