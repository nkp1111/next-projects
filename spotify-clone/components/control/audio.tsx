"use client";

import React from 'react'
import { RxShuffle } from "react-icons/rx";
import { IoRepeat } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";
import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';

let timePassed = "0:00";
let songDuration = "2:40";

export default function AudioField() {
  const {
    playBackControl: { isPlaying, currentTime, currentTrack },
    handlePlayPauseTrack,
    handlePlaylistTrackChange,
  }: ContextParams = useGlobalContext();

  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <div className='flex justify-center items-center gap-4'>
        <button type="button"
          className='hover:text-white transition-all tooltip' data-tip="Shuffle"
          aria-label="Shuffle">
          <RxShuffle className="w-5 h-5" />
        </button>
        <button type="button"
          className='hover:text-white transition-all tooltip'
          data-tip="Previous"
          aria-label='Previous'
          onClick={() => handlePlaylistTrackChange("prev")}>
          <CgPlayTrackPrev className="w-7 h-7 aspect-auto" />
        </button>
        <button type="button"
          className='btn bg-white hover:bg-white hover:scale-105 text-black transition-all duration-300 flex justify-center'
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={handlePlayPauseTrack}>
          {isPlaying ? (
            <FaPause className="w-4 h-4" />
          ) : (
            <FaPlay className="w-4 h-4" />
          )}
        </button>
        <button type="button"
          className='hover:text-white tooltip'
          data-tip="Next"
          aria-label='Next'
          onClick={() => handlePlaylistTrackChange("next")}>
          <CgPlayTrackNext className="w-7 h-7 aspect-auto" />
        </button>
        <button type="button"
          className='hover:text-white tooltip'
          data-tip="Repeat"
          aria-label='Repeat'>
          <IoRepeat className="w-6 h-6" />
        </button>
      </div>
      <div className='flex items-center gap-2 -mt-2'>
        <span>
          <small>{timePassed}</small>
        </span>
        <span>
          <progress className="progress w-96 h-1 cursor-pointer" value="0" max="100"></progress>
        </span>
        <span>
          <small>{songDuration}</small>
        </span>
      </div>
    </div>
  )
}
