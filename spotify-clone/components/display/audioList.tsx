import { getAllPlaylist } from '@/lib/playlist/getAllPlaylist';
import React from 'react'
import AudioCardHolder from './audioCard';
import { SamplePlaylistProps } from '@/types';


const getDateTime = (date: string | Date | number) => new Date(date).getTime();


export default async function AudioList() {
  const playlists: SamplePlaylistProps[] = await getAllPlaylist();
  const recentPlayed = playlists.sort((a, b) => getDateTime(b.lastPlayed) - getDateTime(a.lastPlayed)).slice(0, 4);

  return (
    <div>
      <AudioCardHolder
        articleHeading={"Recently played"}
        playlists={recentPlayed}
      />

      <AudioCardHolder
        articleHeading={"Spotify original & exclusive shows"}
        playlists={playlists} />
    </div>
  )
}
