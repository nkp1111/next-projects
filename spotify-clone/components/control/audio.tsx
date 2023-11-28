"use client";

import React, { useEffect, useState } from 'react'
import { RxShuffle } from "react-icons/rx";
import { IoRepeat } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";
import { TbRepeatOnce, TbRepeat } from "react-icons/tb";
import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';
import formatSecondsDuration from '@/lib/date/formatSecondsDuration';


export default function AudioField() {
  const {
    playBackControl: { isPlaying, currentTrack },
    handlePlayPauseTrack,
    handlePlaylistTrackChange,
    playBackMode: { shuffle, repeat },
    handlePlayBackMode,
  }: ContextParams = useGlobalContext();

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
    <div className='flex flex-col justify-center items-center gap-1'>
      <div className='flex justify-center items-center gap-4'>
        <button type="button"
          className={`hover:text-white transition-all duration-300 tooltip relative`} data-tip={!shuffle ? "Shuffle" : "Shuffle Off"}
          aria-label="Shuffle"
          onClick={(e) => handlePlayBackMode("shuffle")}>
          <RxShuffle className={`w-5 h-5 ${shuffle && "text-primary"}`} />
          {shuffle && <span className='absolute text-5xl m-0 bottom-0 -right-3 text-primary'>.</span>}
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
          className='hover:text-white tooltip transition-all duration-300'
          data-tip="Repeat"
          aria-label='Repeat'
          onClick={(e) => handlePlayBackMode("repeat")}>
          {repeat === "repeat-one" ? (
            <TbRepeatOnce className="w-6 h-6 text-primary" />
          ) : (
            < TbRepeat className={`w-6 h-6 ${repeat !== "repeat-none" && "text-primary"}`} />
          )}
        </button>
      </div>
      {/* show current song progress  */}
      <div className='flex items-center gap-2 -mt-2'>
        <span>
          <small>{formatSecondsDuration(currentDuration)}</small>
        </span>
        <span>
          <progress className="progress w-96 h-1 cursor-pointer"
            value={Math.floor(currentDuration * 100 / currentTrack.duration)}
            max="100"></progress>
        </span>
        <span>
          <small>{formatSecondsDuration(currentTrack.duration)}</small>
        </span>
      </div>
    </div>
  )
}
