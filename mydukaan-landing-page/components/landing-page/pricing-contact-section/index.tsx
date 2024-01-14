import React from 'react'
import { StarIcon } from '../feature-section/section-article'
import { contactData } from "./section-data";
import Image from 'next/image';

export default function PricingContactSection() {
  return (
    <section className={`z-30 relative pt-12 text-start `}>
      <div className='flex gap-3 md:gap-8 md:p-16 p-10 bg-gradient-to-r from-rose-400 to-orange-300 relative overflow-hidden rounded-lg'>
        <div className='absolute bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 w-full aspect-square -left-1/2 -bottom-3/4 rounded-full'></div>

        <div className='relative z-10 flex-1'>
          <h2 className={`font-bold xl:text-5xl sm:text-4xl text-3xl}`}>
            Dukaan Enterprise
          </h2>
          <p className='md:text-xl text-lg text-gray-600 mt-5 mb-8'>Scale your D2C business on Dukaan’s lightning fast infrastructure with custom built features.</p>

          <div className="flex relative gap-3">
            <button type="button" className='bg-stone-950 text-white font-bold border border-black rounded-lg px-6 py-3 text-lg  hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear'>Get in touch</button>
            <button type="button" className='font-medium rounded-lg px-6 py-3 text-lg hover:text-neutral-900 transition-all duration-300 ease-linear underline'>Learn more</button>
          </div>
        </div>

        <div className='relative z-10 flex-1'>
          <ul>
            {["Custom Themes & 3rd party integrations",
              "20+ Additional Plugins",
              "B2B or B2C Marketplace",
              "Vendor Management Dashboard",
              "Marketplace Integration",
              "Custom Shipping Rules",
              "Dedicated Support"].map(item => (
                <li key={item} className='text-lg mb-2 text-gray-900 flex gap-2'>
                  <span><StarIcon fillColor='#333' /></span>
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className='flex flex-wrap items-start justify-between gap-6 mt-16 md:flex-row flex-col'>
        {contactData.map(data => (
          <article key={data.id} className='flex md:flex-row-reverse md:max-w-[30%] w-full items-start gap-2 flex-1 h-full'>
            <div>
              <h3 className='text-xl font-medium'>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div className='ms-auto'>
              <Image
                src={data.image}
                alt={"."}
                width={70}
                height={70}
                className={`aspect-auto ${data.id === 2 ? "md:w-16" : "md:w-24"}`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
