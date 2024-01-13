import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import Plans from './plans'

export default function PricingFrontPage() {
  return (
    <div className='z-30 relative bg-white py-20'>
      <MainPaddingX>
        <h1 className='font-bold xl:text-5xl sm:text-4xl text-3xl mt-20 text-center lg:w-[80%] lg:mx-auto'>Choose your success path with Dukaan’s flexible pricing</h1>

        <Plans />
      </MainPaddingX>
    </div>
  )
}
