import React from 'react'
import Logo from '../general/logo'
import NavLinks from './nav-links'

export default function Header() {
  return (
    <header className='py-5 md:px-10 px-5 border-b-2 border-gray-200 flex md:gap-7 gap-3 relative items-center sm:flex-row flex-col z-50 bg-white'>
      <Logo />
      <NavLinks />
    </header>
  )
}
