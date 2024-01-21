"use client";

import { SampleSongsProps } from '@/types';
import React, { useState } from 'react'
import formatDateDistance from '@/lib/date/formatDateDistance';
import Image from 'next/image';
import formatSecondsDuration from '@/lib/date/formatSecondsDuration';
import { FaPause, FaPlay } from 'react-icons/fa';
import { useGlobalContext } from '@/lib/context';
import { ContextParams } from '@/types/context';
import AnimatedIcon from '../general/animatedIcon';
import { BsThreeDotsVertical } from "react-icons/bs";


interface SongTableParams {
  playlistSongs: SampleSongsProps[];
  playlistId: string;
}

const tableStructure: { [key: number]: string } = {
  0: "w-8",
  1: "flex-1 flex-grow-[2]",
  2: "flex-1  md:block hidden",
  3: "flex-1  md:block hidden",
  4: "w-32  md:block hidden",
  5: "w-10 md:hidden block"
}

const tableHeaderMap: { [key: string]: string } = {
  "#": "ind",
  "title": "name",
  "album": "album",
  // TODO: change to createdAt
  "date added": "lastPlayed",
  "duration": "duration",
  "": "options"
}

export default function SongTable({ playlistSongs, playlistId }: SongTableParams) {
  const [hoverInd, setHoverInd] = useState<number>(-1);
  const {
    playBackControl: { isPlaying, currentTrack },
    playlist: { currentPlaylist },
    handlePlayPauseTrack,
    setCurrentTrack,
    setCurrentPlaylist,
  }: ContextParams = useGlobalContext();
  const playingCurrentSong = (current: SampleSongsProps, playing: SampleSongsProps) => isPlaying && String(current._id) === String(playing._id);

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
        <div key={song.id || String(song._id)}
          className='flex px-3 items-center text-gray-400 my-2 btn-ghost transition-all duration-300 py-2 cursor-pointer'
          onMouseEnter={() => setHoverInd(index)}
          onMouseLeave={() => setHoverInd(-1)}>
          {Object.keys(tableHeaderMap).map((head, ind) => (
            <div key={head}
              className={`capitalize ${tableStructure[ind]} rounded-sm`}>
              {head === "#" && (
                <div className=''>
                  {
                    hoverInd === index
                      ? <button
                        type="button"
                        aria-label={`${isPlaying ? "Pause" : "Play"} ${song.name}`}
                        data-tip={`${isPlaying ? "Pause" : "Play"} ${song.name}`}
                        className='tooltip'>
                        {playingCurrentSong(song, currentTrack)
                          ? <FaPause className="w-4 h-4"
                            onClick={handlePlayPauseTrack} />
                          : <FaPlay className="w-4 h-4"
                            onClick={() => {
                              if (playlistId !== String(currentPlaylist._id)) {
                                setCurrentPlaylist(playlistId)
                              }
                              setCurrentTrack(String(song._id));
                            }} />}
                      </button>
                      : playingCurrentSong(song, currentTrack)
                        ? <AnimatedIcon />
                        : <span className={`${song._id === currentTrack._id && "text-primary font-semibold"}`}>{index + 1}</span>
                  }
                </div>
              )}
              {head === "title" && (
                <div className='flex items-center gap-4'>
                  <Image
                    src={song.image}
                    alt="."
                    width={300}
                    height={300}
                    className='object-cover w-14 h-14'
                  />
                  <div className='flex flex-col'>
                    <span className={`text-lg ${song._id === currentTrack._id ? "text-primary font-semibold" : "text-white"}`}>{song.name}</span>
                    <span className='text-sm'>{song.artist}</span>
                  </div>
                </div>
              )}
              <div className=''>
                {head === "album" && `${song.album}`}
                {head === "date added" && `${formatDateDistance(song.lastPlayed)} ago`}
                {head === "duration" && (
                  <span className='text-end'>
                    {formatSecondsDuration(song.duration)}
                  </span>
                )}
                {head === "" && (
                  <span className='text-end cursor-pointer hover:text-white transition-all duration-300'>
                    <BsThreeDotsVertical />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
