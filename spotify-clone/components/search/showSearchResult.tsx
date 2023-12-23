"use client";

import React, { useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation";
import { PlaylistParam } from '@/types/context';
import getSearchTrack from '@/lib/playlist/getSearchTrack';
import Image from 'next/image';
import Link from 'next/link';
import { SampleSongsProps } from '@/types';
import formatSecondsDuration from '@/lib/date/formatSecondsDuration';
import PlaylistPlayButton from '../buttons/playlist-play-button';
import { CiHeart } from 'react-icons/ci';

export default function ShowSearchResult() {
  const searchParam = useSearchParams();
  const query = searchParam.get("query");
  // console.log(query);
  const [topResults, setTopResults] = useState<any>(null);
  const [topResultPlaylist, setTopResultPlaylist] = useState<any>(null);

  // for styling purposes
  const [pointerOnTopResult, setPointerOnTopResult] = useState(false);
  const [pointerResultIndex, setPointerResultIndex] = useState(-1);

  useEffect(() => {
    if (!query) {
      setTopResults(() => "");
      setTopResultPlaylist(() => "");
      return;
    }

    getSearchTrack(query).then(data => {
      const {
        track: { topResultAlbum, topResultArtist, topResultTitle },
        playlist: { topResultTitlePlaylist }
      } = data;
      setTopResults(() => topResultTitle);
      setTopResultPlaylist(() => topResultTitlePlaylist);
    });
  }, [query])

  // const result = getResult(query);

  if (!topResults && !topResultPlaylist) {
    return null;
  }

  if (topResults.length === 0) {
    return <div className='text-error'>No track Found</div>
  }

  return (
    <div className='mt-3'>
      <div className="grid w-full gap-6 md:grid-cols-2 mt-6">
        <article>
          <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">Top result</h3>

          <div className={`max-w-sm  rounded-lg shadow relative p-3 transition-all duration-300 ease-linear ${pointerOnTopResult ? "bg-slate-100 dark:bg-zinc-700" : "bg-white dark:bg-zinc-900"}`}
            onMouseEnter={() => setPointerOnTopResult(true)}
            onMouseLeave={() => setPointerOnTopResult(false)}
          >
            <span
              className='cursor-pointer'
            >
              <Image
                className="rounded-sm"
                src={topResults[0]?.image}
                alt=""
                width={100}
                height={100}
              />
            </span>
            <div className="pt-4">
              <span
                className='cursor-pointer'
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topResults[0].name}</h5>
              </span>
              <p className="mb-3 font-normal">{topResults[0].artist} . song</p>
            </div>

            <div className={`absolute bottom-4 right-4 transition-all duration-300 ease-linear ${pointerOnTopResult ? "block" : "hidden"}`}>
              <PlaylistPlayButton playlistId={topResultPlaylist[0].id} />
            </div>
          </div>
        </article>
        <article>
          <h3 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">Songs</h3>
          <div className='flex flex-col'>
            {topResults.map((song: SampleSongsProps, index: number) => (
              <div className={`flex p-3 mb-1 rounded-md shadow-sm items-center ${pointerResultIndex === index ? "bg-zinc-700" : ""}`}
                key={song.id}
                onMouseEnter={() => setPointerResultIndex(index)}
                onMouseLeave={() => setPointerResultIndex(-1)}>
                <div className='relative'>
                  <Image
                    src={song.image}
                    width={60}
                    height={60}
                    alt={song.name}
                  />

                  <div className={`absolute opacity-40 w-1/2 h-1/2 top-0 left-0 me-3 transition-all ease-linear duration-300 ${pointerResultIndex === index ? "block" : "hidden"}`}>
                    <PlaylistPlayButton playlistId={topResultPlaylist[0].id}></PlaylistPlayButton>
                  </div>
                </div>
                <div className='flex flex-col ms-4'>
                  <span className='font-semibold'>{song.name}</span>
                  <span className='text-sm'>{song.artist}</span>
                </div>

                <div className='ms-auto flex'>
                  <span className={`${pointerResultIndex === index ? "block" : "hidden"} me-3 transition-all ease-linear duration-300`}>
                    <span className='cursor-pointer'>
                      <CiHeart className="w-6 h-6" />
                    </span>
                  </span>
                  <span>{formatSecondsDuration(song.duration)}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
