import Image from 'next/image'
import React from 'react'
import image1 from "@/public/assets/pexels-pixabay-461064.jpg"
import image2 from "@/public/assets/pexels-adedire-abiodun-10216492.jpg"

export default function FirstSection() {
  return (
    <section className='relative'>
      <div className='mx-auto md:w-1/2 md:my-36 my-20 px-4'>
        <h2 className='font-medium md:text-2xl text-xl'>We make <span className='text-custom-blue'>Live</span>, <span className='text-custom-blue'>Push</span> and <span className='text-custom-blue'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>

        <p className='my-5'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
      </div>

      <div className='relative'>
        <div className='relative z-10 md:px-24 md:gap-24 sm:px-16 sm:gap-16 px-4 gap-4 flex justify-evenly items-center'>
          <Image
            src={image1}
            alt="."
            width={800}
            height={800}
            className='flex-1 sm:min-w-96 min-w-64'
          />

          <div className='flex-1 md:min-w-96 sm:min-w-64 min-w-32'>
            <Image
              src={image2}
              alt="."
              width={600}
              height={400}
              className='flex-1'
            />
          </div>
        </div>
        {/* background image block */}
        <div className='absolute w-2/3 left-1/3 -top-16 -bottom-16 bg-custom-cream' />
      </div>
    </section>
  )
}
