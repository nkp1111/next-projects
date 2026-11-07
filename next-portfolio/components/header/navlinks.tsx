"use client";

import React from 'react'
import Link from 'next/link'
import { sections } from '@/constant'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {sections.map(section => {
        const Icon = section.icon;
        const isActive = pathname === section.link;

        return (
          <li key={section.id}>
            <Link
              href={section.link}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-content shadow-sm font-semibold"
                  : "text-base-content/80 hover:text-base-content hover:bg-base-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{section.title}</span>
            </Link>
          </li>
        )
      })}
    </>
  )
}
