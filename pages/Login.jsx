import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import {useFormik} from 'formik'

const Login = () => {


  return (
    <div>
     <Helmet>
        <title>LOGIN || LDS</title>
    </Helmet>
        <div className="mb-10"> <Navbar/></div> 
        <div className= "flex flex-col items-center justify-center h-screen text-white bg-black">
            <div className="p-20 bg-black rounded-lg">
                <div className="my-10 text-3xl font-black text-center ">LDS</div>
                <div className="">
                    <div className="text-xl font-bold text-center">Welcome || Login</div>
                    <div className="m-2 font-light text-center">Enter your details</div>
                    <form autoCapitalize='off'>
                    <div className="flex flex-col text-black w-72">
                        <input type="email" id="email" placeholder="Enter your registered email" className="p-2 py-2 mt-2 text-left rounded-md"/>
                        <input type="password" id="password"  placeholder="Enter your password" className="p-2 py-2 my-4 text-left rounded-md"/>
                        <button className="py-2 text-white bg-yellow-500 rounded-lg ">Continue</button>
                    </div>
                    <div className="pt-2 m-2 text-center">Doesn't have an account? <Link to="/register" className="text-yellow-500"><button>Register</button></Link></div>
                    </form>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Login
