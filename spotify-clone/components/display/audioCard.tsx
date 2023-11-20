import { SamplePlaylistProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type AudioCardProps = {
  playlists: SamplePlaylistProps[],
  articleHeading: string,
}

export default function AudioCard(
  { playlists, articleHeading }: AudioCardProps
) {
  return (
    <article className='my-5'>
      <h3 className='font-bold text-2xl'>{articleHeading}</h3>
      <div className="flex items-center flex-wrap mt-5 gap-5">
        {playlists.map((playlist, ind) => (
          <Link
            key={ind}
            href={`/playlist/${playlist.id}`}
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
    </article>
  )
}
