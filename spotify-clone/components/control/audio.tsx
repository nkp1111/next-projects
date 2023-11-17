import React from 'react'
import { RxShuffle } from "react-icons/rx";
import { IoRepeat } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";

let timePassed = "0:00";
let songDuration = "2:40";

export default function AudioField() {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <div className='flex justify-center items-center gap-4'>
        <button type="button" title={"Shuffle"}
          className='hover:text-white transition-all'>
          <RxShuffle className="w-5 h-5" />
        </button>
        <button type="button" title={"Previous"}
          className='hover:text-white transition-all'>
          <CgPlayTrackPrev className="w-7 h-7 aspect-auto" />
        </button>
        <button type="button" title={"Play"}
          className='btn hover:btn-primary bg-white text-black hover:text-white transition-all flex justify-center'>
          <FaPlay className="w-4 h-4" />
        </button>
        <button type="button" title={"Next"}
          className='hover:text-white'>
          <CgPlayTrackNext className="w-7 h-7 aspect-auto" />
        </button>
        <button type="button" title={"Repeat"}
          className='hover:text-white'>
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
