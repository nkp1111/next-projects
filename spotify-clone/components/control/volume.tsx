"use client";

import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';
import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { LiaVolumeDownSolid, LiaVolumeMuteSolid } from "react-icons/lia";
import { RiPlayList2Fill } from "react-icons/ri";

export default function Volume() {
  const { volume, setVolume }: ContextParams = useGlobalContext()
  return (
    <div className='flex gap-3 items-center'>
      <span className='cursor-pointer hover:text-white'>
        <RiPlayList2Fill className="w-5 h-5" />
      </span>
      <span className='cursor-pointer hover:text-white'>
        <FaComputer className="w-5 h-5" />
      </span>

      <span className='flex items-center'>
        {volume.current === 0 ? (
          // unmute button 
          <span className='tooltip' data-tip="Unmute" >
            <LiaVolumeMuteSolid className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setVolume((pre) => ({ ...pre, prev: 0, current: volume.prev || 10 }));
              }} />
          </span>
        ) : (
          // mute button 
          <span className='tooltip' data-tip="Mute">
            <LiaVolumeDownSolid className="w-6 h-6 cursor-pointer"
              onClick={() => {
                setVolume((pre) => ({ ...pre, prev: volume.current, current: 0 }));
              }} />
          </span>
        )}

        {/* volume control slider  */}
        <input
          aria-label='volume' type="range"
          min="0" max="100" value={volume.current}
          className="w-24 h-1  text-primary bg-green-900 rounded-lg cursor-pointer dark:bg-gray-700 left-0 top-0 w-100 tooltip"
          data-tip={volume.current}
          onChange={(e) => {
            setVolume((pre) => ({ ...pre, current: Number(e.target.value) }));
          }} />
      </span>

    </div>
  )
}
