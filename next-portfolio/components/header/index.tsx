import React from 'react'
import Link from "next/link"
import NavLinks from './navlinks'
import ThemeSwitcher from './themeSwitcher'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-base-100/90 border-b border-base-200/80 shadow-sm transition-colors'>
      <div className="max-w-6xl mx-auto navbar px-4 sm:px-6">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost px-2 normal-case text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-mono font-bold text-lg">
              N
            </span>
            <span className="font-semibold text-base-content">Neeraj Parmar</span>
            <span className="badge badge-sm badge-outline text-primary border-primary/40 font-mono hidden sm:inline-flex">Node.js Dev</span>
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1">
            <NavLinks />
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
