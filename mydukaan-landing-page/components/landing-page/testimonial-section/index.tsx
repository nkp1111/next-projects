import React from 'react'
import SectionHeading from '../general/section-heading'
import Image from 'next/image'
import apostropheImage from "@/public/assets/testimonial-section/apostrophe.svg"
import TestimonialCarousel from './testimonial-carousel'
import MainPaddingX from '../general/main-padding-x'


export default function TestimonialSection() {
  return (
    <section className={`z-30 relative py-16`}>
      <MainPaddingX>
        <div className='md:w-3/4 md:mx-auto text-center flex flex-col'>
          <div className='order-2'>
            <SectionHeading
              heading={"Hear from our satisfied customers"}
            />
          </div>
          <p className='md:text-xl text-lg text-gray-600 my-5 md:w-11/12 md:mx-auto order-3'>From beginners to enterprise brands, everyone loves Dukaan!</p>
          <Image
            src={apostropheImage}
            alt={"."}
            width={50}
            height={50}
            className='order-1 w-20 mx-auto my-10'
          />
        </div>
        <div className='flex flex-row relative'>
          <TestimonialCarousel />
        </div>
      </MainPaddingX>
    </section>
  )
}
