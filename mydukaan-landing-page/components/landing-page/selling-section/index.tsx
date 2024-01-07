import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import Image from 'next/image'
import happyShoppingImage from "@/public/assets/selling-section/happy-shopping.svg"

export default function SellingSection({ pricingPage = false }: { pricingPage?: boolean }) {
  return (
    <section className={`z-30 relative py-20 text-start `}>
      <MainPaddingX>
        <div className='flex flex-col-reverse gap-5 md:gap-8 md:p-16 p-10 bg-gradient-to-r from-rose-400 to-orange-300 relative overflow-hidden rounded-lg'>
          <div className='absolute bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 w-full aspect-square -left-1/2 -bottom-3/4 rounded-full'></div>
          <div className='relative z-10'>
            <h2 className={`font-extrabold xl:text-5xl sm:text-4xl text-3xl ${pricingPage && "flex flex-col"}`}>
              <span>{!pricingPage ? "Start selling online." : "Chase your dreams."}</span>
              {pricingPage && <span>Start your online store.</span>}
            </h2>
            <p className='md:text-xl text-lg text-gray-600 mt-5 mb-8 lg:w-1/2'>Take your business online with Dukaan. Get your free online store in 30 seconds.</p>

            <div className="flex relative">
              <button type="button" className='bg-stone-950 text-white font-bold border border-black rounded-lg px-6 py-3 text-lg  hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear'>Get started</button>
            </div>
          </div>
          <div className='relative z-10'>
            <Image
              src={happyShoppingImage}
              alt={"."}
              width={100}
              height={100}
              className='w-14 aspect-auto'
            />
          </div>
        </div>
      </MainPaddingX>
    </section>
  )
}
