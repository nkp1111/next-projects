"use client";

import React from 'react'
import { sections } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const path = usePathname();
  return (
    <>
      {sections.map(section => (
        <li key={section.id} className='mx-auto'>
          <Link href={section.link}
            className={`${path === section.link && "bg-secondary"}`}
          >
            {section.title}
          </Link>
        </li>
      ))
      }
    </>
  )
}
