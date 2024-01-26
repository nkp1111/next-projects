"use client";

import React, { useState } from 'react'
import { navBottomData } from './navbar-data';
import NavExtraInfo from './nav-extra-info';
import SingleLink from './singleLink';

export default function NavButton() {
  const [seeMore, setSeeMore] = useState(false);
  const [currentLink, setCurrentLink] = useState("About");
  return (
    <div>
      <button type="button"
        className={`font-medium ${seeMore && "text-custom-tomato-red"}`}
        onClick={() => setSeeMore(pre => !pre)}
      >
        <span>More</span>
        <span className='transition-custom1 font-bold ms-1'>{seeMore ? <>&minus;</> : "+"}</span>
      </button>


      <div className='absolute top-full left-0 right-0 transition-custom1 shadow-md flex flex-col gap-5 px-10 py-5'>
        {seeMore ? (
          <NavExtraInfo />
        ) : null}

        <div>
          <ul className='flex md:gap-7 gap-4'>
            {navBottomData.map(item => (
              <SingleLink
                key={item.id}
                activeColor='red'
                item={item}
                currentLink={currentLink}
                setCurrentLink={setCurrentLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

