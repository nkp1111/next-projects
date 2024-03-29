import Image from 'next/image'
import React from 'react'
import image1 from "@/public/assets/pexels-olia-danilevich-4974914.jpg"
import image3 from "@/public/assets/pexels-cottonbro-studio-6804084.jpg"

export default function FifthSection() {
  return (
    <section className='relative'>
      <div className='mx-auto md:w-1/2 md:my-36 my-20 px-4'>
        <h2 className='font-medium md:text-2xl text-xl'>
          We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
        </h2>

        <p className='my-5'>
          Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
        </p>
      </div>

      <div className='relative'>
        <div className='relative z-10 md:ps-24 md:gap-24 sm:ps-16 sm:gap-16 ps-4 gap-4 flex justify-evenly items-center'>
          <div className='flex flex-1 flex-col md:gap-24 sm:gap-16 gap-4'>
            <Image
              src={image1}
              alt="."
              width={600}
              height={600}
              className='flex-1 sm:min-w-96 min-w-64'
            />
          </div>

          <Image
            src={image3}
            alt="."
            width={750}
            height={750}
            className='flex-1 sm:min-w-64 min-w-32'
          />
        </div>
        {/* background image block */}
        <div className='absolute w-2/3 left-[17%] -top-16 -bottom-16 bg-custom-indigo' />
      </div>
    </section>
  )
}
