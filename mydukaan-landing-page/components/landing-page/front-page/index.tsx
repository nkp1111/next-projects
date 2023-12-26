import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import appleLogo from "@/public/assets/logos/apple-logo.svg"
import googlePlayStoreLogo from "@/public/assets/logos/google-play-store.svg"
import backgroundImage from "@/public/assets/background/ben-kolde-bs2Ba7t69mM-unsplash.jpg"
import Image from 'next/image'

export default function FrontPage() {
  return (
    <div className='z-30 relative'>
      <MainPaddingX>
        <div className='flex flex-col md:flex-row items-center h-[100vh] gap-8 md:gap-4 justify-end'>
          <div className='flex justify-center flex-col '>
            <h1 className='font-bold xl:text-5xl sm:text-4xl text-3xl mt-20'>Your Global Commerce Partner, Engineered for Peak Performance</h1>
            <p className='mt-3 mb-5 text-lg'>Launch your eye-catching online store with ease, attract and convert more customers than ever before.</p>
            <div >
              <button type="button" className='cursor-pointer text-lg rounded-md bg-sky-700 text-white px-5 py-3 transition-all duration-300 ease-linear hover:-mt-1 hover:mb-1'>Get Started</button>
            </div>
            <div className='flex flex-row items-center mt-6 gap-2'>
              <span>Also available on </span>
              <a href="#">
                <Image
                  src={appleLogo}
                  alt="apple logo"
                  width={16}
                  height={16}
                  className='w-4 h-auto aspect-auto'
                />
              </a>
              <a href="#">
                <Image
                  src={googlePlayStoreLogo}
                  alt="google play store logo"
                  width={16}
                  height={16}
                  className='w-5 h-auto aspect-auto'
                />
              </a>
            </div>
          </div>

          <div className='h-[20%] sm:h-[25%] md:h-full overflow-hidden md:pt-44 relative md:left-20 w-full'>
            <Image
              src={backgroundImage}
              alt={""}
              width={600}
              height={600}
              className='h-[500px] min-w-[200px] rounded-3xl object-cover'
              priority={true}
            />
          </div>
        </div>
      </MainPaddingX>
    </div>
  )
}
