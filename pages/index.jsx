import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Home() {
  const router = useRouter();
  const handleClickPic = () => {
     router.push("/event/Events")
  }

  const handleEvent = () => {
     router.push("/event/Events")
  }
  return (

    <div>
      <Head>
        <title>Literary and Debating Society</title>
              <script
        type="module"
        async
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        async
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      </Head>

      <main>
       <Navbar/>
      <div className='grid mt-20 mb-20 md:grid-cols-3 '>
         <div className="flex-col items-center justify-center col-span-2 px-10 text-lg font-light leading-loose">
          <p className="">One of Coimbatore's largest events dedicated solely to celebrating the love of the English Language and its rich literature is back and ready to be the literary festival that will leave you in awe.</p>
          <p className="">Over the years, Brainstrain has established itself as a grand arena where more than 200 literary intellectuals from across Coimbatore and other parts of the state come together. This event has its grand vision set fast on bringing together students from different disciplines and all walks of life to foster the spirit of friendly competition among peers while having fun in the various exciting events that they will be participating in.</p>
          <p className="">Naturally, we are extremely thrilled to invite you to be a part of GCT’s one and only intellectual challenge that will provide students with the perfect platform to put their mettle and passion to the test. So walk in challengers! Get ready to showcase your talents in a range of stimulating competitions and rise to the challenge while you duke it out for the win. Huddle up our fellow kindred souls, and celebrate the immortal beauty of English.</p>
          <p className="">The beating heart of Brainstrain throbs with fervor to provide every student that graces its halls with the ultimate opportunity to showcase their eloquence and improvisation skills as it strives to be the birth of a whole new realm of literature and speech.</p>
          <p className="">And that's not all! This 2023, Brain strain promises to be an even more of a spectacular venue with an extravagant and sizzling lineup of events that are sure to set the arena ablaze. From debating your way out of a sinking ship and bringing your words to life, gear up as you traverse through various events and display your flair to captivate the eager spectators.</p>
         </div>
      <div>
         <div>
          <img src="https://www.linkpicture.com/q/coming-soon5.jpg" alt="Go to Brainstrain" className="flex items-center justify-center mt-16 mb-20 ml-16 cursor-pointer max-h-96"  />
         </div>
         
         <div onClick={handleClickPic}>
          <button className="p-4 mb-12 font-bold text-white bg-red-600 rounded-md ml-28 w-44 bg-red" onclick={handleEvent}>Go to Events</button>
         </div>
      </div>
        
      </div>
      <div>
      
      </div>
      <Footer/>
      </main>
    </div>
  );
}
