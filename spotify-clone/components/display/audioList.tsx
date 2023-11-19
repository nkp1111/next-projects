import getAllPlaylist from '@/lib/getAllPlaylist';
import Image from 'next/image';
import React from 'react'

const getDateTime = (date: string | Date | number) => new Date(date).getTime();

export default async function AudioList() {
  const playlists = await getAllPlaylist();
  const recentPlayed = playlists.sort((a, b) => getDateTime(b.lastPlayed) - getDateTime(a.lastPlayed)).slice(0, 4);

  return (
    <div>
      <article className='my-5'>
        <h3 className='font-bold text-2xl'>Recently played</h3>
        <div className="flex items-center flex-wrap mt-5 gap-5">
          {recentPlayed.map((playlist, ind) => (
            <div key={ind} className="card bg-base-100 shadow-xl p-4 rounded-sm">
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
            </div>
          ))}
        </div>
      </article>


      <article className='my-5'>
        <h3 className='font-bold text-2xl'>Spotify original &amp; exclusive shows</h3>
        <div className="flex items-center flex-wrap mt-5 gap-5">
          {playlists.map((playlist, ind) => (
            <div key={ind} className="card bg-base-100 shadow-xl p-4 rounded-sm">
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
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
