"use client";

import React from 'react'
import { sidebarNav } from '@/constant/sidebarNav'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function SidebarNavItem() {
  const router = useRouter();
  return (
    <nav className='navbar items-start flex-col mt-2 border-b border-gray-700'>
      {sidebarNav.map(navItem => (
        <div key={navItem.id} className={`btn btn-ghost rounded-sm w-full justify-start ${navItem.containerClass}`}
          onClick={() => {
            router.push(navItem.link);
          }}>
          <div className={`${navItem.id === 5 && "bg-gradient-to-tl from-purple-500 to-blue-500 p-1 rounded-sm me-1"}`}>
            <navItem.icon className={`${navItem.id === 5 ? "w-4 h-4" : "w-6 h-6"}`} />
          </div>
          <div className="normal-case">
            {navItem.title}
          </div>
        </div>
      ))}
    </nav>
  )
}


