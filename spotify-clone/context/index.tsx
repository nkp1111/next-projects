"use client";

import { PlayBackControlParam, PlayBackModeParam, PlaylistParam, VolumeParam } from '@/types/context';
import React, { createContext, useContext, useState } from 'react'
import samplePlaylist from '@/constant/samplePlaylists';
import getQueuePlaylist from '@/lib/playlist/getQueuePlaylist';

const AudioContext = createContext<any>(null);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const currentPlaylist = samplePlaylist[0];

  const [volume, setVolume] = useState<VolumeParam>({ prev: 0, current: 80 });

  const [playlist, setPlaylist] = useState<PlaylistParam>({ currentPlaylist, queue: currentPlaylist.songsArray });

  const [playBackControl, setPlayBackControl] = useState<PlayBackControlParam>({ isPlaying: false, currentTrack: playlist?.queue[0], currentTime: 0 });

  const [playBackMode, setPlayBackMode] = useState<PlayBackModeParam>({ shuffle: false, repeat: "repeat-none" });


  return (
    <AudioContext.Provider
      value={{
        volume,
        setVolume,
        playlist,
        setPlaylist,
        playBackControl,
        setPlayBackControl,
        playBackMode,
        setPlayBackMode,
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };