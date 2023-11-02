import React from 'react'
import Link from "next/link"
import NavLinks from './navlinks'

export default function Header() {
  return (
    <header className='shadow-sm shadow-primary p-2 bg-base-100'>
      <nav className="navbar sm:flex-row flex-col">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost uppercase text-xl font-mono">NEERAJ</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1">
            <NavLinks />
          </ul>
        </div>
      </nav>
    </header>
  )
}
