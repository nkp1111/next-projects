"use client";

import React, { useEffect, useState } from 'react'
import MainPaddingX from '../general/main-padding-x'
import logo from "@/public/mydukaan-logo.svg"
import Image from 'next/image';
import Link from 'next/link';
import NavbarDropdownContent from './navbar-dropdown-item';

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);
  const [currentNavItem, setCurrentNavItem] = useState("");
  const [navItemHover, setNavItemHover] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const yPosition = window.scrollY
      if (yPosition < 1) {
        setShowBackground(false);
      } else {
        setShowBackground(true);
      }
    })
  }, []);

  useEffect(() => {
    if (navItemHover) {
      setShowBackground(true);
    } else {
      if (window.scrollY < 1) {
        setShowBackground(false);
      }
    }
  }, [navItemHover]);

  return (
    <div className={`${showBackground ? "bg-white" : "bg-transparent"} transition-all duration-300 ease-linear`} >
      <nav className='relative'>
        <MainPaddingX>
          <div className="flex w-full items-center flex-wrap py-4 gap-1 justify-between">
            {/* logo  */}
            <Link href="/" className='relative mx-auto'>
              <div className="absolute bg-white rounded-full h-full aspect-square -z-10 top-0"></div>
              <Image
                src={logo}
                alt="logo"
                width={160}
                height={50}
              />
            </Link>

            <button data-collapse-toggle="mega-menu-full" type="button" className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden ms-auto" aria-controls="mega-menu-full" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

            <div className="hidden items-center justify-center lg:justify-between font-medium w-full lg:flex md:w-auto lg:ms-16 md:flex-1 flex-wrap gap-2">
              <ul className="flex gap-1 md:p-0 rounded-lg">
                {/* nav items  */}
                {["Products", "Company", "Resources"].map(item => (
                  <li key={item}
                    onMouseEnter={() => {
                      setCurrentNavItem(item)
                      setNavItemHover(true);
                    }}
                    onMouseLeave={() => !navItemHover && setCurrentNavItem("")}
                  >
                    <button type="button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3">
                      {item}
                      <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  </li>
                ))}
                <li>
                  <a href="#" className="block py-2 px-3 rounded hover:underline">Pricing</a>
                </li>
              </ul>

              <div className='gap-3 flex'>
                <a role='button' href="#" className='cursor-pointer text-lg rounded-md text-gray-700 hover:underline transition-all duration-300 ease-linear px-2 py-3'>Sign In</a>
                <div>
                  <button type="button" className='cursor-pointer text-lg rounded-md bg-sky-700 text-white px-5 py-3 transition-all duration-300 ease-linear hover:-mt-1'>Start Free</button>
                </div>
              </div>
            </div>
          </div>
        </MainPaddingX>

        {/* dropdown- item  */}
        <div className={`bg-white border-t border-secondary py-4 transition-all duration-300 ease-linear absolute top-[100%] left-0 w-full ${navItemHover ? "flex w-full" : "hidden"}`}>
          <MainPaddingX>
            <NavbarDropdownContent
              currentNavItem={currentNavItem as "" | "Resources" | "Products" | "Company"}
              setNavItemHover={setNavItemHover}
            />
          </MainPaddingX>
        </div>
      </nav>
    </div>
  )
}


