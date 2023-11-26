"use client";

import { VolumeParam } from '@/types/context';
import React, { createContext, useContext, useState } from 'react'

const AudioContext = createContext<any>(null);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [volume, setVolume] = useState<VolumeParam>({ prev: 0, current: 80 });

  return (
    <AudioContext.Provider
      value={{
        volume,
        setVolume,
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };