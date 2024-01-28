import Image from 'next/image'
import React from 'react'
import image1 from "@/public/assets/pexels-pixabay-461064.jpg"
import image2 from "@/public/assets/pexels-adedire-abiodun-10216492.jpg"

export default function SixthSection() {
  return (
    <section className='relative'>
      <div className='mx-auto md:w-1/2 md:my-36 my-20 px-4'>
        <h2 className='font-medium md:text-2xl text-xl'>
          We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
        </h2>

        <p className='my-5'>
          If you&apos;re joining us in Berlin, we&apos;ll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
        </p>
      </div>

      <div className='relative md:px-24 md:gap-24 sm:px-16 sm:gap-16 px-4 gap-4 flex justify-evenly items-center'>
        <div className='relative z-10  bg-custom-sky-blue flex items-center justify-between sm:flex-row flex-col'>
          <Image
            src={image1}
            alt="."
            width={800}
            height={800}
            className='sm:w-1/2 w-full'
          />

          <div className='flex-1 md:min-w-96 sm:min-w-64 min-w-32 font-semibold flex items-start justify-between flex-col text-2xl gap-5 md:px-24 sm:px-16 px-8 py-8'>
            <h3>
              We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
            </h3>
            <button type="button" className='text-custom-blue font'>See latest jobs &#8250; </button>
          </div>
        </div>
      </div>
    </section>
  )
}
