import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import Image from 'next/image'
import logo from "@/public/mydukaan-logo-white.svg"
import {
  feature,
  info,
  navLinks,
  finance,
  social,
} from "./footer-data"

export default function Footer() {
  return (
    <footer className='relative z-20 bg-stone-800 text-white'>
      <MainPaddingX>
        <div className='pt-10 pb-5'>
          <div className="flex">
            <div className='lg:block hidden'>
              <Image
                src={logo}
                alt={"."}
                width={100}
                height={30}
                className='aspect-auto w-48'
              />
            </div>

            <div className="flex flex-1 justify-between lg:ms-20 xl:flex-nowrap flex-wrap gap-10">
              {[feature, info, navLinks, finance, social].map((item, index) => (
                <ul key={index} className='flex flex-col gap-3'>
                  {item.map(navItem => (
                    <li key={navItem.id} className='text-lg hover:text-gray-300 transition-all duration-300 ease-linear'>
                      <a href={navItem.link}>{navItem.name}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <hr className='border-gray-500 my-5' />

          <div className='flex flex-col'>
            <div className='lg:hidden block mx-auto mb-5'>
              <Image
                src={logo}
                alt={"."}
                width={100}
                height={30}
                className='aspect-auto w-48'
              />
            </div>
            <div className="flex md:justify-between items-center md:flex-row flex-col">
              <p>By Neeraj Parmar, 2023.</p>
              <p>Made in India</p>
            </div>
          </div>
        </div>
      </MainPaddingX>
    </footer>
  )
}
