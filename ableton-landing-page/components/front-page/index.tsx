import Image from 'next/image'
import React from 'react'
import backgroundImage from "@/public/assets/pexels-firmbeecom-6625656.jpg"

export default function FrontPage() {
  return (
    <div className='mx-auto relative'>
      <Image
        src={backgroundImage}
        alt={"."}
        width={1000}
        height={500}
        className={'mx-auto object-cover md:h-[82vh] sm:h-[74vh] h-[60vh] w-auto'}
      />
      <h1 className='absolute font-medium text-custom-tomato-red md:text-9xl sm:text-8xl text-7xl top-32 left-1/2 -translate-x-1/2 shadow-sm'>Ableton</h1>
    </div>
  )
}
