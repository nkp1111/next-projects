"use client";

import { SampleSongsProps } from '@/types';
import React from 'react'
import formatDateDistance from '@/lib/date/formatDateDistance';
import Image from 'next/image';


interface SongTableParams {
  playlistSongs: SampleSongsProps[]
}

const tableStructure: { [key: number]: string } = {
  0: "w-10",
  1: "flex-1 flex-grow-[2]",
  2: "flex-1",
  3: "flex-1",
  4: "w-32",
}

const tableHeaderMap: { [key: string]: string } = {
  "#": "ind",
  "title": "name",
  "album": "album",
  // TODO: change to createdAt
  "date added": "lastPlayed",
  "duration": "duration",
}

export default function SongTable({ playlistSongs }: SongTableParams) {

  return (
    <div className="p-2 w-full">
      {/* table heading  */}
      <div className='flex border-b border-gray-600 px-3 mb-5'>
        {Object.keys(tableHeaderMap).map((head, ind) => (
          <div key={ind}
            className={`capitalize text-gray-400 pb-2 ${tableStructure[ind]} `}>
            {head}
          </div>
        ))}
      </div>

      {/* table body  */}
      {playlistSongs.map((song, index) => (
        <div key={song.id}
          className='flex px-3 items-center text-gray-400 my-2'>
          {Object.keys(tableHeaderMap).map((head, ind) => (
            <div key={head}
              className={`capitalize pb-2 ${tableStructure[ind]} `}>
              {head === "#" && index + 1}
              {head === "title" && (
                <div className='flex items-center gap-4 '>
                  <Image
                    src={song.image}
                    alt="."
                    width={300}
                    height={300}
                    className='object-cover w-14 h-14'
                  />
                  <div className='flex flex-col'>
                    <span className='text-lg text-white'>{song.name}</span>
                    <span className='text-sm'>{song.artist}</span>
                  </div>
                </div>
              )}
              {head === "date added" && `${formatDateDistance(song.lastPlayed)} ago`}
              {/* // TODO: change typescript check  */}
              {!["#", "title", "date added"].includes(head) && song[tableHeaderMap[head] as never]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
