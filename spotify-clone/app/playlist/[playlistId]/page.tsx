import DisplayHeader from '@/components/display/header';
import PlaylistBanner from '@/components/playlist/banner';
import SongTable from '@/components/playlist/songTable';
import songs from '@/constant/sampleSongs';
import getAllPlaylist from '@/lib/playlist/getAllPlaylist';
import { SampleSongsProps } from '@/types';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'
import { FaPlay } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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
        <PlaylistBanner playlist={playlist} />

        <hr className='border border-b-accent' />

        <div className='flex mt-6 gap-10 items-center'>
          <button type="button"
            className='btn btn-primary text-black hover:scale-105 transition-all duration-300 flex justify-center tooltip w-14 h-14'
            data-tip="Play"
            aria-label="Play">
            <FaPlay className="w-6 h-6" />
          </button>

          <button type="button"
            className='cursor-pointer transition-all duration-300 flex justify-center'
            aria-label="Options">
            <HiOutlineDotsHorizontal className="w-8 h-8" />
          </button>
        </div>

        <div className='mt-3'>
          <SongTable playlistSongs={playlistSongs} />
        </div>

      </div>
    </section>
  )
}

