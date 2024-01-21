"use client";

import songs from '@/constant/sampleSongs'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';
import { FaPlay, FaPause } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


export default function MobileControl() {

  const {
    playBackControl: { isPlaying, currentTrack },
    handlePlayPauseTrack,
    handlePlaylistTrackChange,
    playBackMode: { shuffle, repeat },
    handlePlayBackMode,
  }: ContextParams = useGlobalContext();

  const { image, name, artist } = currentTrack;
  // current duration 
  const [currentDuration, setCurrentDuration] = useState<number>(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentDuration((pre) => isPlaying ? pre + 1 : pre);
    }, 1000)
    return () => clearInterval(interval);
  }, [isPlaying]);

  // reset duration on new song
  useEffect(() => {
    setCurrentDuration(0)
  }, [currentTrack]);


  return (
    <div className="bg-indigo-700 rounded-md p-2 w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <figure>
          <Image
            src={image}
            alt="."
            width={50}
            height={50}
            className='rounded-md'
          />
        </figure>
        <div className="justify-center w-28 overflow-hidden gap-0">
          <h2 className="font-semibold m-0">{name.length > 12 ? name.slice(0, 9) + "..." : name}</h2>
          <p className='m-0 text-xs'>{artist}</p>
        </div>
      </div>

      <div className='flex gap-4 items-center'>
        <div className='text-primary text-2xl cursor-pointer opacity-95 hover:opacity-100'>
          <MdLaptop />
        </div>

        <div className='border-rounded text-2xl cursor-pointer opacity-95 hover:opacity-100 font-semibold'>
          <IoCheckmarkCircleOutline className="text-primary" />
        </div>

        <div>
          <button type="button"
            className='btn bg-transparent border-0 hover:scale-105 transition-all duration-300 flex justify-center'
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={handlePlayPauseTrack}>
            {isPlaying ? (
              <FaPause className="w-4 h-4" />
            ) : (
              <FaPlay className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>
    </div>
  )
}
