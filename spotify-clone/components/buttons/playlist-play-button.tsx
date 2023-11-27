"use client";

import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';
import React, { useEffect } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa';


export default function PlaylistPlayButton({ playlistId }: { playlistId: string }) {
  const {
    playBackControl: { isPlaying },
    handlePlaylistChange,
    handlePlayPauseTrack,
  }: ContextParams = useGlobalContext();


  useEffect(() => {
    handlePlaylistChange(playlistId)
  }, [playlistId]);

  return (
    <button type="button"
      className='btn btn-primary text-black hover:scale-105 transition-all duration-300 flex justify-center tooltip w-14 h-14'
      data-tip={isPlaying ? "Pause" : "Play"}
      aria-label={isPlaying ? "Pause" : "Play"}
      onClick={handlePlayPauseTrack}>
      {isPlaying ? (
        <FaPause className="w-5 h-5" />
      ) : (
        <FaPlay className="w-5 h-5" />
      )}
    </button>
  )
}
