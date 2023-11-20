import getAllPlaylist from '@/lib/getAllPlaylist';
import React from 'react'


type PlaylistParams = {
  params: { playlistId: string },
}

export default async function Playlist({ params: { playlistId } }: PlaylistParams) {
  // get playlist by playlistId
  const playlists = await getAllPlaylist();
  const playlist = playlists.find(pl => pl.id === playlistId);
  console.log(playlist);
  return (
    <div>
      {playlistId}
    </div>
  )
}
