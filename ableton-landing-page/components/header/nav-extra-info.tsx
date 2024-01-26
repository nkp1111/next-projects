"use client";

import React, { useState } from 'react'
import { navHiddenLinks } from './navbar-data'
import Link from 'next/link';
import SingleLink from './singleLink';

export default function NavExtraInfo() {
  const [currentLink, setCurrentLink] = useState("");
  return (
    <div className='flex flex-col gap-7 py-7 text-lg'>
      <article>
        <h3 className='font-medium text-3xl mb-2'>More on Ableton.com:</h3>
        <ul className='flex md:gap-7 gap-4'>
          {navHiddenLinks.slice(0, 7).map(item => (
            <SingleLink
              key={item.id}
              activeColor='red'
              item={item}
              currentLink={currentLink}
              setCurrentLink={setCurrentLink}
            />
          ))}
        </ul>
      </article>

      <article>
        <h3 className='font-medium text-3xl mb-2'>More from Ableton:</h3>
        <div className='flex md:gap-7 gap-4 justify-between flex-wrap'>
          {navHiddenLinks.slice(7,).map(item => (
            <div key={item.id} className='md:w-80'>
              <h4 className='font-medium'>{item.title}</h4>
              <p className='text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
