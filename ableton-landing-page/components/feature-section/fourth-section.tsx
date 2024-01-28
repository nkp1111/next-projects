import Image from 'next/image'
import React from 'react'
import image1 from "@/public/assets/pexels-cottonbro-studio-6804610.jpg"

export default function FourthSection() {
  return (
    <section className='relative'>
      <div className='mx-auto md:w-1/2 md:mt-36 md:mb-16 mt-20 mb-10 px-4'>
        <h2 className='font-medium md:text-2xl text-xl'>
          We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
        </h2>

        <p className='my-5'>
          Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
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
      </div>
    </section>
  )
}
