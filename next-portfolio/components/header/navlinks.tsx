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
            className={`${path === section.link && "bg-secondary"} mx-auto flex flex-col items-center justify-center hover:cursor-pointer hover:opacity-90 opacity-100 pt-2`}
            onClick={(e) => {
              router.push(section.link)
            }}
          >
            <Icon className='m-0 w-8 h-8 p-0' />
            <span>{section.title}</span>
          </li>
        )
      })}
    </>
  )
}
