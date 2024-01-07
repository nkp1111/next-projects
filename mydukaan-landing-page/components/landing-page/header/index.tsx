"use server";

import React from 'react'
import TimeDeal from './time-deal'
import Navbar from './navbar'
import getEndTime from './getEndTime'

export default async function Header() {
  const endDate = await getEndTime()
  return (
    <header className='fixed top-0 left-0 w-full z-50 shadow-sm'>
      <TimeDeal endDate={endDate} />
      <Navbar />
    </header>
  )
}
