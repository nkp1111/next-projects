import React from 'react'
import Logo from '../general/logo'
import { sidebarNav } from '@/constant/sidebarNav'
import Link from 'next/link'

/**
 * @desc Sidebar
 * @returns 
 */
export default function Sidebar() {
  return (
    <section className="w-80 bg-black h-full relative flex flex-col">
      <h2 className="absolute text-center w-full invisible -top-96">Sidebar Navigation</h2>
      <div className='flex flex-col w-full h-full'>

        <div className='flex-1 p-2'>
          {/* spotify logo  */}
          <div className='p-4'>
            <Logo />
          </div>
          {/* navbar  */}
          <nav className='navbar items-start flex-col mt-3'>
            {sidebarNav.map(navItem => (
              <div key={navItem.id} className="btn btn-ghost w-full justify-start">
                <navItem.icon className={"w-6 h-6 "} />
                <Link
                  href={navItem.link}
                  className="normal-case">
                  {navItem.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        <div className='w-24'>
          end
        </div>
      </div>
    </section>
  )
}
