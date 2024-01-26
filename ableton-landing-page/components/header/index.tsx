import React from 'react'
import Logo from '../general/logo'
import NavLinks from './nav-links'

export default function Header() {
  return (
    <header className='py-5 px-10 border-b-2 border-gray-200 flex md:gap-7 gap-4 relative'>
      <Logo />
      <NavLinks />
    </header>
  )
}
