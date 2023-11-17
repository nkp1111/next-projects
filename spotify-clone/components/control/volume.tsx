import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { LiaVolumeDownSolid, LiaVolumeMuteSolid } from "react-icons/lia";
import { RiPlayList2Fill } from "react-icons/ri";

export default function Volume() {
  return (
    <div className='flex gap-3 items-center'>
      <span className='cursor-pointer hover:text-white'>
        <RiPlayList2Fill className="w-5 h-5" />
      </span>
      <span className='cursor-pointer hover:text-white'>
        <FaComputer className="w-5 h-5" />
      </span>
      <span className='flex items-center'>
        <LiaVolumeDownSolid className="w-6 h-6" />
        {/* <LiaVolumeMuteSolid className="w-6 h-6" /> */}
        <progress className="progress cursor-pointer w-24 h-1" value="30" max="100"></progress>
      </span>
    </div>
  )
}
