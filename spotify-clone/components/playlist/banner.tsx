import { SamplePlaylistProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function PlaylistBanner(
  { playlist }: { playlist: SamplePlaylistProps }
) {
  return (
    <div className="hero place-items-start">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={playlist.image}
          alt={playlist.playlistName}
          width={300}
          height={300}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div className=''>
          <span className='uppercase text-sm mb-3'>Playlist</span>
          <h1 className="md:text-6xl text-4xl font-bold">{playlist.playlistName}</h1>
          <p>{playlist?.description}</p>
          <p className="py-6 flex gap-2 flex-wrap">
            <span className='font-bold'>{playlist.createdBy} </span> .
            <span>{playlist.numberOfSongs} songs </span> .
            <span>{new Date(playlist.totalDuration * 1000).toISOString().substring(11, 19)}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
