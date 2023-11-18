import Link from 'next/link'
import React from 'react'
import { FaSpotify } from "react-icons/fa"

/**
 * @desc Spotify logo
 * @params
 * @returns 
 */
export default function Logo(
  { className }: { className?: string }
) {
  return (
    <Link href="/" className={`flex items-center gap-1 hover:text-primary transition-all duration-500 ${className}`}>
      <span><FaSpotify className="h-auto w-8" /></span>
      <span className='font-bold text-xl'>Spotify</span>
    </Link>
  )
}
