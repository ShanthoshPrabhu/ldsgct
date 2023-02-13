import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import {Helmet} from 'react-helmet'
import { useFormik } from 'formik'

const Login = () => {
        const { values , handleBlur , handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            collegeName:'',
            email:'',
            password:'',
        }
    })

    console.log("initialVlues",values)
    
  return (
   <div>
    <Helmet>
        <title>REGISTER || LDS</title>
    </Helmet>
       <div>
        <div className="mb-10"> <Navbar/></div> 
        <div className= "flex flex-col items-center justify-center h-screen text-white bg-black">
            <div className="p-20 bg-black rounded-lg">
                <div className="my-10 text-3xl font-black text-center ">LDS</div>
                <div className="">
                    <div className="text-xl font-bold text-center">Welcome || Register</div>
                    <div className="m-2 font-light text-center">Enter your details</div>
                    <form action="">
                    <div className="flex flex-col text-black w-72">
                        <input 
                        type="text" 
                        id="firstName" 
                        placeholder="Enter your First Name" 
                        className="p-2 py-2 mt-2 text-left rounded-md"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <input 
                        type="name" 
                        id="lastName" 
                        placeholder="Enter your Last Name" 
                        className="p-2 py-2 mt-2 text-left rounded-md"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {/* <input 
                        type="text" 
                        id="secondName" 
                        placeholder="Enter your Second Name"  
                        className="p-2 py-2 mt-2 text-left rounded-md"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        /> */}
                        <input 
                        type="text" 
                        id="collegeName"
                        placeholder="Enter your College" 
                        className="p-2 py-2 mt-2 text-left rounded-md"
                        value={values.collegeName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email" 
                        className="p-2 py-2 mt-2 text-left rounded-md"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <input 
                        type="password"  
                        id="password" 
                        placeholder="Enter your password" 
                        className="p-2 py-2 my-2 text-left rounded-md"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <button className="py-2 text-white bg-yellow-500 rounded-lg ">Continue</button>
                    </div>
                    </form>
                    <div className="pt-2 m-2 text-center">Already have an account? <Link to='/login' className="text-yellow-500">Log In</Link></div>
                    
                </div>
            </div>
        </div>
     </div>
   </div>
  )
}

export default Login
