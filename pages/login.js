import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";


function Loginpage() {
    const [providers,setProviders]=useState([]);
    const { data: session } = useSession();
    useEffect(()=>{
    getProv()
    },[])
    async function getProv(){
      const provider = await getProviders();
      console.log('pro',provider)
      setProviders(provider)
    }
    console.log('providers',providers)
  return (
    <div className="flex flex-col items-center space-y-20 pt-48 min-h-screen bg-black">
      {Object?.values(providers).map((provider) => (
          <div key={provider.name}>
            
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mt-[150px]"
              onClick={() => signIn(provider.id,{callbackUrl:'http://localhost:3000/event/Events'})}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </div>
        ))}
    </div>
  );
}

export default Loginpage;

