import React from 'react'
import getAllPlaylist from '@/lib/getAllPlaylist';

export default async function PlaylistList() {
  const playlists = await getAllPlaylist();
  return (
    <ul className='p-4 flex flex-col justify-start items-start h-full overflow-y-auto'>
      {playlists.map((playlist, ind) => (
        <li key={ind}
          className='normal-case p-2 py-1 rounded-sm w-full cursor-pointer hover:bg-zinc-900'>{playlist.playlistName}</li>
      ))}
    </ul>
  )
}
