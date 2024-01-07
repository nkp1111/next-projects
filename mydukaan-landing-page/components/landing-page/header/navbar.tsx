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

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (showNavbar) {
      setShowBackground(true);
    } else {
      setCurrentNavItem("");
    }
  }, [showNavbar]);

  useEffect(() => {
    const checkScrollPos = () => {
      if (window.scrollY < 1 && window.innerWidth >= 1024) {
        setShowBackground(false);
      } else {
        setShowBackground(true);
      }
    }
    const checkWidthNav = () => {
      if (window.innerWidth >= 1024) {
        setShowNavbar(false);
      } else {
        setShowBackground(true);
      }
    }

    checkWidthNav();
    checkScrollPos();
    window.addEventListener("resize", checkWidthNav);
    window.addEventListener("scroll", checkScrollPos);
    return () => {
      window.removeEventListener("resize", checkWidthNav);
      window.removeEventListener("scroll", checkScrollPos);
    }
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
            <Link href="/" className='relative lg:mx-auto '>
              <div className="absolute bg-white rounded-full h-full aspect-square -z-10 top-0"></div>
              <Image
                src={logo}
                alt="logo"
                width={160}
                height={50}
                className='aspect-auto'
              />
            </Link>

            <button data-collapse-toggle="mega-menu-full" type="button" className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden ms-auto bg-white" aria-controls="mega-menu-full" aria-expanded="false" onClick={() => setShowNavbar(pre => !pre)}>
              <span className="sr-only">Open main menu</span>
              {showNavbar ?
                <svg className='transition-all duration-300 ease-linear' height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                </svg> :
                <svg className="w-5 h-5 transition-all duration-300 ease-linear" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              }
            </button>

            {/* big screen size nav items  */}
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
                  <a href="/pricing" className="block py-2 px-3 rounded hover:underline">Pricing</a>
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
        <div className={`bg-white border-t border-secondary py-4 transition-all duration-300 ease-linear absolute top-[100%] left-0 w-full ${navItemHover ? "hidden lg:flex w-full" : "hidden"}`}>
          <MainPaddingX>
            <NavbarDropdownContent
              currentNavItem={currentNavItem as "" | "Resources" | "Products" | "Company"}
              setNavItemHover={setNavItemHover}
            />
          </MainPaddingX>
        </div>

        {/* small width navbar items  */}
        <div className={`absolute top-full left-0 w-full lg:hidden bg-white transition-all duration-300 ease-linear shadow-md ${showNavbar ? "flex pt-3 pb-10" : "hidden"}`}>
          <MainPaddingX>
            <ul className="flex flex-col gap-1 md:p-0 rounded-lg w-full">
              {/* nav items  */}
              {["Products", "Company", "Resources"].map(item => (
                <li key={item}
                  onClick={() => {
                    if (currentNavItem === item) {
                      setCurrentNavItem("");
                    } else {
                      setCurrentNavItem(item)
                    }
                  }}
                  className='flex flex-col'
                >
                  <button type="button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-start w-full py-2 px-3 gap-2">
                    {item}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>

                  <span className={`${currentNavItem === item ? "flex" : "hidden"}`}>
                    <NavbarDropdownContent
                      currentNavItem={currentNavItem as "" | "Resources" | "Products" | "Company"}
                      setNavItemHover={setNavItemHover}
                      smallWidth
                    />
                  </span>
                </li>
              ))}
              <li>
                <a href="/pricing" className="block py-2 px-3 rounded hover:underline">Pricing</a>
              </li>

              <div className='gap-5 flex justify-between flex-wrap mt-8'>
                <div className='flex-1'>
                  <a role='button' href="#" className='bg-gray-200 cursor-pointer text-lg rounded-md text-gray-700 hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear px-2 py-3 flex-1 block text-nowrap text-center'>Sign In</a>
                </div>
                <div className='flex-1'>
                  <button type="button" className='cursor-pointer text-lg rounded-md bg-sky-700 text-white px-5 py-3 transition-all duration-300 ease-linear hover:-mt-1 hover:mb-1 flex-1 w-full text-nowrap text-center'>Start Free</button>
                </div>
              </div>
            </ul>
          </MainPaddingX>
        </div>
      </nav>
    </div>
  )
}


