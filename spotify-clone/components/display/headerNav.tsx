"use client";

import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { usePathname, useRouter } from 'next/navigation';
import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';

export default function HeaderNav() {
  const { playlist: { currentPlaylist } }: ContextParams = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <button type="button"
        className='tooltip bg-black rounded-full p-2 text-white'
        data-tip="Back"
        aria-label='Back'
        disabled={pathname === "/"}
        onClick={() => {
          if (pathname === "/") return;
          router.push("/")
        }}
      >
        <BsChevronLeft className="w-4 h-4" />
      </button>

      <button type="button"
        className='tooltip bg-black rounded-full p-2 text-white'
        data-tip="Next"
        aria-label='Next'
        disabled={pathname !== "/"}
        onClick={() => {
          if (pathname !== "/") return;
          router.push("/playlist/" + currentPlaylist.id)
        }}
      >
        <BsChevronRight className="w-4 h-4" />
      </button>
    </>
  )
}
