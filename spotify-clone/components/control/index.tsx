import React from 'react'
import AudioField from './audio'
import CurrentSongInfo from './current-song-info'
import VolumeField from './volume'

export default function AudioControl() {
  return (
    <div className="h-auto lg:h-[110px] w-full bg-zinc-900 border-t border-zinc-800 flex justify-center lg:justify-between items-center gap-2 flex-wrap px-4 py-2">
      <CurrentSongInfo />
      <AudioField />
      <VolumeField />
    </div>
  )
}
