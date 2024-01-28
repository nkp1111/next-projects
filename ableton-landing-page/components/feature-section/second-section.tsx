import React from 'react'
// import video1 from "../../public/assets/Treadmill Running 500fps.avi"
import image1 from "@/public/assets/pexels-cottonbro-studio-6804610.jpg"
import Image from 'next/image'

export default function SecondSection() {
  return (
    <section className='relative'>
      <div className='mx-auto md:w-1/2 md:mt-36 md:mb-16 mt-20 mb-10 px-4'>
        <h2 className='font-medium md:text-2xl text-xl'>
          Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
        </h2>

        <p className='my-5'>
          We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
        </p>
      </div>

      <div className='relative sm:mx-auto md:w-1/2 sm:w-3/4 w-auto sm:px-0 overflow-hidden mx-4'>
        <Image
          src={image1}
          alt="."
          width={800}
          height={400}
          className='flex-1'
        />
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50 flex justify-center items-center' />
        <div className='rounded-full bg-custom-blue w-28 h-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl justify-center flex items-center cursor-pointer' >
          &#10148;
        </div>
      </div>
    </section>
  )
}
