// "use client"; 

import Header from '@/components/header'
import styles from "@/app/utils.module.css"
import SearchBar from '@/components/searchbar'
import CategorySection from '@/components/categorySection'
import Footer from '@/components/footer'
// import { useEffect } from 'react'


export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const mongoDBConnectUrl = "/api/dbconnect";
  //     const res = await fetch(mongoDBConnectUrl);
  //     const data = await res.json();
  //     if (data.success) {
  //       console.log(data.success)
  //     } else {
  //       console.log(data.error);
  //     }
  //   })();
  // }, [])

  return (
    <div className={`text-white ${styles.black_background}`}>
      <Header />
      <main className='text-center'>
        <h1 className='fw-bold mt-4'>Let&apos;s Make Live Happen</h1>
        <p>
          Shop millions of live events and discover can&apos;t-miss concerts, games, theater and more.
        </p>
        <div className='w-75 d-flex flex-wrap m-auto'>
          <SearchBar />
        </div>

        <CategorySection />
      </main>

      <Footer />
    </div>
  )
}
