"use client";

import React, { useState } from 'react'
import { navData } from './navbar-data';
import NavButton from './nav-button';
import SingleLink from './singleLink';

export default function NavLinks() {
  const [currentLink, setCurrentLink] = useState("Home");
  return (
    <div className='flex md:gap-7 gap-4 justify-between flex-1'>
      <div className='flex md:gap-7 gap-4'>
        <ul className='flex md:gap-7 gap-4'>
          {navData.slice(0, 7).map(item => (
            <SingleLink
              key={item.id}
              activeColor='blue'
              item={item}
              currentLink={currentLink}
              setCurrentLink={setCurrentLink}
            />
          ))}
        </ul>
        <NavButton />
      </div>

      <div>
        <ul className='flex md:gap-7 gap-4'>
          {navData.slice(7,).map(item => (
            <SingleLink
              key={item.id}
              activeColor='blue'
              item={item}
              currentLink={currentLink}
              setCurrentLink={setCurrentLink}
            />
          ))}
        </ul>
      </div>

    </div>
  )
}



