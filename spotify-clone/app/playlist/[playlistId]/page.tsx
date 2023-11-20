import DisplayHeader from '@/components/display/header';
import songs from '@/constant/sampleSongs';
import getAllPlaylist from '@/lib/getAllPlaylist';
import { SampleSongsProps } from '@/types';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'


type PlaylistParams = {
  params: { playlistId: string },
}

/**
 * @desc get playlist by playlistId
 * @param {string} playlistId
 */
const getCurrentPlaylist = cache(async (playlistId: string) => {
  const playlists = await getAllPlaylist();
  return playlists.find(pl => pl.id === playlistId);
})


export async function generateMetadata({ params: { playlistId } }: PlaylistParams) {
  let playlist = await getCurrentPlaylist(playlistId);
  if (!playlist) return { title: "Not found -Spotify Clone" }
  return { title: playlist.playlistName + " -Spotify Clone" }
}


export default async function Playlist({ params: { playlistId } }: PlaylistParams) {
  // get playlist by playlistId
  let playlist = await getCurrentPlaylist(playlistId);

  if (!playlist) {
    notFound()
  }

  let playlistSongs: SampleSongsProps[] = songs.filter(song => playlist?.songsArray.includes(song.id));

  return (
    <section className='bg-zinc-900 text-white flex-1 h-full px-8 py-2 overflow-y-auto'>
      <h2 className="text-center w-full invisible -top-96">Playlist {playlist.playlistName}</h2>
      <DisplayHeader />
      <div className='mt-4 h-full'>

      </div>
    </section>
  )
}

