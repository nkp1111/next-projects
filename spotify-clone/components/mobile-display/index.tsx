import { getAllPlaylist } from '@/lib/playlist/getAllPlaylist';
import { SamplePlaylistProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai';

export default async function MobileDisplay() {
  const playlists: SamplePlaylistProps[] = await getAllPlaylist();
  return (
    <div className='flex flex-col md:hidden'>

      <div className='flex gap-3'>
        <div className="flex-1 rounded-md bg-zinc-700 flex gap-3 overflow-hidden items-center cursor-pointer">
          <div className='bg-gradient-to-tl from-purple-500 to-blue-500 w-16 h-16 flex items-center justify-center text-2xl'>
            <AiFillHeart />
          </div>
          <div className='font-semibold'>
            Liked Songs
          </div>
        </div>

        <div className="flex-1 rounded-md bg-zinc-700 flex gap-2 overflow-hidden items-center cursor-pointer">
          <Image
            src={playlists[0].image}
            alt={playlists[0].playlistName}
            width={100}
            height={100}
            className='w-16 h-16 object-cover'
          />
          <div className='font-semibold'>
            Hot Hits India
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap mt-5 gap-5">
        {playlists.map((playlist, ind) => (
          <Link
            key={ind}
            href={`/playlist/${playlist.id || playlist._id}`}
            className="card bg-base-100 shadow-xl p-4 rounded-sm cursor-pointer">
            <figure className='rounded-md'>
              <Image
                src={playlist.image}
                alt={playlist.playlistName}
                width={100}
                height={100}
                className='w-full h-52 object-cover'
              />
            </figure>
            <div className="card-body px-0 py-3">
              <h2 className="font-bold m-0 mt-2">{playlist.playlistName}</h2>
              <p className='mt-0'>By {playlist.createdBy}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
