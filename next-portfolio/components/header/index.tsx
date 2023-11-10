import React from 'react'
import Link from "next/link"
import NavLinks from './navlinks'
import { UserIcon } from '@heroicons/react/20/solid'
import ThemeSwitcher from './themeSwitcher'

export default function Header() {
  return (
    <header className='shadow-sm shadow-primary bg-base-100'>
      <nav className="navbar sm:flex-row flex-col">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost uppercase text-xl font-mono flex flex-row gap-1">
            {/* user icon - Link element only accepts html element inside */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="info" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span>NEERAJ</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1">
            <NavLinks />
          </ul>
        </div>

        <ThemeSwitcher />
      </nav>
    </header>
  )
}
