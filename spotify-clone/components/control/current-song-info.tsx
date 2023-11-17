import songs from '@/constant/sampleSongs'
import Image from 'next/image';
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { AiFillCreditCard } from "react-icons/ai";

export default function CurrentSongInfo() {
  const { image, name, artist } = songs[1];
  return (
    <div className='flex items-center gap-6'>
      <div className="flex items-center gap-3">
        <figure>
          <Image
            src={image}
            alt="."
            width={50}
            height={50}
          />
        </figure>
        <div className="justify-center gap-0">
          <h2 className="font-semibold m-0">{name}</h2>
          <p className='m-0 text-xs'>{artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className='cursor-pointer'>
          <CiHeart className="w-6 h-6" />
        </span>
        <span className='cursor-pointer'>
          <AiFillCreditCard className="w-6 h-6" />
        </span>
      </div>
    </div>
  )
}
