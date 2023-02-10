import { useSession } from 'next-auth/react'
import Head from 'next/head'


export default function Home() {
  const { data: session ,status} = useSession();
  return (
    <div >
      <Head>
        <title>Literary and Debating Society</title>
      </Head>

      <main>
         <div>LDS</div>
      </main>
    </div>
  )
}
