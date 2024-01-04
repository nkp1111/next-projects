import PlaylistPlayButton from '@/components/buttons/playlist-play-button';
import DisplayHeader from '@/components/display/header';
import PlaylistBanner from '@/components/playlist/banner';
import SongTable from '@/components/playlist/songTable';
import songs from '@/constant/sampleSongs';
import { getAllPlaylist } from '@/lib/playlist/getAllPlaylist';
import { SampleSongsProps } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'
import { FaPlay } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from "react-icons/hi";


export const metadata: Metadata = {
  title: 'Create -Spotify Clone',
}

export default async function CreatePlaylist() {
  const playlist = {};
  return (
    <section className='bg-zinc-900 text-white flex-1 h-full px-8 py-2 overflow-y-auto'>
      <h2 className="text-center w-full invisible -top-96">New Playlist</h2>
      <DisplayHeader />
      <div className='mt-4 h-full'>
        {/* <PlaylistBanner playlist={playlist} /> */}

        <hr className='border border-b-accent' />

        <div className='mt-3'>
          {/* <SongTable playlistSongs={playlistSongs} playlistId={playlist.id} /> */}
        </div>

      </div>
    </section>
  )
}

