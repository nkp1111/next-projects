"use client";

import React from 'react'
import { sections } from '@/constant'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image';

export default function NavLinks() {
  const path = usePathname();
  const router = useRouter();
  return (
    <>
      {sections.map(section => {
        const Icon = section.icon;
        return (
          <li key={section.id}
            className={`${path === section.link && "bg-secondary"} mx-auto flex flex-col items-center justify-center pt-2`} >
            <Icon className='m-0 w-8 h-8 p-0' onClick={(e) => {
              router.push(section.link)
            }} />
            <Link href={section.link}>
              {section.title}
            </Link>
          </li>
        )
      })}
    </>
  )
}
