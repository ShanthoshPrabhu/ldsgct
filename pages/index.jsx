import { useSession } from "next-auth/react";
import Head from "next/head";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Home() {
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

      <main className="bg-black">
       <Navbar/>
      <div className='grid grid-cols-3 mt-20 text-white'>
         <div className="px-10 col-span-2 text-lg font-light leading-loose flex-col justify-center items-center">
          <p className="">One of Coimbatore's largest events dedicated solely to celebrating the love of the English Language and its rich literature is back and ready to be the literary festival that will leave you in awe.</p>
          <p className="">Over the years, Brainstrain has established itself as a grand arena where more than 200 literary intellectuals from across Coimbatore and other parts of the state come together. This event has its grand vision set fast on bringing together students from different disciplines and all walks of life to foster the spirit of friendly competition among peers while having fun in the various exciting events that they will be participating in.</p>
          <p className="">Naturally, we are extremely thrilled to invite you to be a part of GCT’s one and only intellectual challenge that will provide students with the perfect platform to put their mettle and passion to the test. So walk in challengers! Get ready to showcase your talents in a range of stimulating competitions and rise to the challenge while you duke it out for the win. Huddle up our fellow kindred souls, and celebrate the immortal beauty of English.</p>
          <p className="">The beating heart of Brainstrain throbs with fervor to provide every student that graces its halls with the ultimate opportunity to showcase their eloquence and improvisation skills as it strives to be the birth of a whole new realm of literature and speech.</p>
          <p className="">And that's not all! This 2023, Brain strain promises to be an even more of a spectacular venue with an extravagant and sizzling lineup of events that are sure to set the arena ablaze. From debating your way out of a sinking ship and bringing your words to life, gear up as you traverse through various events and display your flair to captivate the eager spectators.</p>
      </div>
         <div>Hello 2</div>
      </div>
      <Footer/>
      </main>
    </div>
  );
}
