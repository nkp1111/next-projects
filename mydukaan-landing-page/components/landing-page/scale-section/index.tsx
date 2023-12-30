import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import SectionHeading from '../general/section-heading'
import BackgroundGrid from './background-grid'

export default function ScaleSection() {
  const scaleFeatures = [
    "99.5% Uptime",
    "Under 1ms Latency",
    "Returns & Exchange",
    "Controlled Shipping",
    "Custom Plugins & Integrations",
    "Personalised Storefront Design",
  ]
  return (
    <section className={`z-30 relative py-20 bg-neutral-900 text-white text-center`}>
      <BackgroundGrid />
      <MainPaddingX>
        <div className='md:w-5/6 md:mx-auto'>
          <SectionHeading
            heading={"Scale your business with Dukaan Enterprise"}
          />
          <p className='text-lg mt-3 mb-5 text-gray-400'>Unlock your brands’s online potential on Dukaan’s lightning fast infrastructure with custom built features.</p>

          <div className='flex md:w-3/4 w-full mx-auto'>
            <ul className="mx-auto flex flex-col my-10 gap-10 flex-1">
              {scaleFeatures.slice(0, 3).map(feature => (
                <li key={feature}
                  className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <ul className="mx-auto flex flex-col my-10 gap-10 md:w-3/4 w-full flex-1">
              {scaleFeatures.slice(3,).map(feature => (
                <li key={feature}
                  className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center relative">
            <button type="button" className='btn-white border border-white rounded-sm px-6 py-3 text-lg mx-auto hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear'>Learn more</button>
          </div>
        </div>
      </MainPaddingX>
    </section>
  )
}
