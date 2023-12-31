import React from 'react'
import TimeDeal from './time-deal'
import Navbar from './navbar'

export default function Header() {

  return (
    <header className='fixed top-0 left-0 w-full z-50 shadow-sm'>
      <TimeDeal />
      <Navbar />
    </header>
  )
}
