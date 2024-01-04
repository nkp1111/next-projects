import React from 'react'
import { getAllPlaylist } from '@/lib/playlist/getAllPlaylist';
import Link from 'next/link';
import { SamplePlaylistProps } from '@/types';

export default async function PlaylistList() {
  const playlists: SamplePlaylistProps[] = await getAllPlaylist();
  return (
    <ul className='p-4 flex flex-col justify-start items-start h-full overflow-y-auto'>
      {playlists.map((playlist, ind) => (
        <li key={ind}
          className='normal-case rounded-sm w-full mt-2'>
          <Link
            className='w-full hover:bg-zinc-900 p-2 block'
            href={`/playlist/${String(playlist.id || playlist._id)}`}>
            {playlist.playlistName}
          </Link>
        </li>
      ))}
    </ul>
  )
}
