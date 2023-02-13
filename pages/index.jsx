import { useSession } from "next-auth/react";
import Head from "next/head";
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

      <main>
        <Navbar />
        <div>LDS</div>
      </main>
    </div>
  );
}
