"use client";

import { sidebarNav } from '@/constant/sidebarNav';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaSpotify } from "react-icons/fa"

export default function MobileBottomNav() {
  const router = useRouter();
  return (
    <>
      {sidebarNav.slice(0, 3).map(navItem => (
        <div key={navItem.id} className={`btn btn-ghost rounded-sm justify-start flex-col ${navItem.containerClass}`}
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

      <div className={`btn btn-ghost rounded-sm justify-start flex-col`}
        onClick={() => {
          router.push("/");
        }}>
        <div className={``}>
          <FaSpotify className="h-6 w-6" />
        </div>
        <div className="normal-case">
          Premium
        </div>
      </div>
    </>
  )
}
