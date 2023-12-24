import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import appleLogo from "@/public/assets/logos/apple-logo.svg"
import googlePlayStoreLogo from "@/public/assets/logos/google-play-store.svg"
import backgroundImage from "@/public/assets/background/smartphone-background.jpg"
import Image from 'next/image'

export default function FrontPage() {
  return (
    <div className='relative overflow-hidden'>
      <MainPaddingX>
        <div className='flex justify-center h-[100vh] lg:w-1/2 w-full flex-col z-30 relative'>
          <h1 className='font-bold xl:text-5xl sm:text-3xl text-2xl mt-20'>Your Global Commerce Partner, Engineered for Peak Performance</h1>
          <p className='mt-3 mb-5 text-lg'>Launch your eye-catching online store with ease, attract and convert more customers than ever before.</p>
          <div>
            <button type="button" className='cursor-pointer text-lg rounded-md bg-sky-700 text-white px-5 py-3 transition-all duration-300 ease-linear hover:-mt-1'>Get Started</button>
          </div>
          <div className='flex flex-row items-center mt-6 gap-2'>
            <span>Also available on</span>
            <a href="#">
              <Image
                src={appleLogo}
                alt="apple logo"
                width={16}
                height={16}
              />
            </a>
            <a href="#">
              <Image
                src={googlePlayStoreLogo}
                alt="google play store logo"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </MainPaddingX>

      <div className="absolute top-52 md:left-1/2 left-10 z-0 -right-48">
        <Image
          src={backgroundImage}
          alt={""}
          width={800}
          height={400}
          className='rounded-3xl'
        />
      </div>
    </div>
  )
}
