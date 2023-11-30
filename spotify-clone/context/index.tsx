"use client";

import { DefaultStateParams, PlayBackControlParam, PlayBackModeParam, PlaylistParam, VolumeParam } from '@/types/context';
import React, { createContext, useContext, useEffect, useState, useReducer } from 'react'
import samplePlaylist from '@/constant/samplePlaylists';
import getWorkingPlaylist from '@/lib/playlist/getWorkingPlaylist';
import getPlaylistSong from '@/lib/playlist/getPlaylistSong';
import { AudioPlaylistType } from 'ts-audio';
import changePlaylistQueue from '@/lib/playlist/changePlaylistQueue';
import playlists from '@/constant/samplePlaylists';
import songs from '@/constant/sampleSongs';
import { SamplePlaylistProps } from '@/types';
import { reducer } from '@/reducer';
import { VOLUME_ACTION } from '@/reducer/action';


const currentPlaylist = samplePlaylist[0];
const defaultState: DefaultStateParams = {
  volume: { prev: 0, current: 80 },
  playlist: { currentPlaylist, queue: currentPlaylist.songsArray },
  playBackControl: { isPlaying: false, currentTrack: getPlaylistSong(currentPlaylist.songsArray[0]) },
  playBackMode: { shuffle: false, repeat: "repeat-none" },
  workingPlaylist: getWorkingPlaylist({ queue: currentPlaylist.songsArray, volume: 80 }),
}

const AudioContext = createContext<any>(null);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // handle volume change 
  const setVolume = (volume: number) => {
    dispatch({ type: VOLUME_ACTION.CHANGE, payload: { volume } });
  }

  const muteVolume = () => {
    dispatch({ type: VOLUME_ACTION.MUTE });
  }

  const unMuteVolume = () => {
    dispatch({ type: VOLUME_ACTION.UNMUTE });
  }


  // // play and pause current playing song
  // const handlePlayPauseTrack = () => {
  //   setPlayBackControl((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
  //   if (workingPlaylist) {
  //     playBackControl.isPlaying ? workingPlaylist.pause() : workingPlaylist.play();
  //   }
  // }

  // // handle playlist current song change
  // const handlePlaylistTrackChange = (action: "next" | "prev") => {
  //   const { currentTrack } = playBackControl;
  //   const { queue } = playlist;
  //   const currentTrackNum = queue.indexOf(currentTrack.id);
  //   // if current track is present in playlist
  //   if (currentTrackNum !== -1) {
  //     let nextTrack = 0;
  //     if (action === "next") {
  //       nextTrack = currentTrackNum === queue.length - 1 ? currentTrackNum : currentTrackNum + 1;

  //       // change playlist song to next
  //       if (nextTrack === currentTrackNum + 1) workingPlaylist.next()
  //     }
  //     if (action === "prev") {
  //       nextTrack = currentTrackNum === 0 ? currentTrackNum : currentTrackNum - 1;

  //       // change playlist song to prev
  //       if (nextTrack === currentTrackNum - 1) workingPlaylist.prev()
  //     }

  //     setPlayBackControl((pre) => ({ ...pre, currentTrack: getPlaylistSong(queue[nextTrack]) }))
  //   } else {
  //     // get new song from playlist from start
  //     console.log("Track not in playlist");
  //     setPlayBackControl((pre) => ({ ...pre, currentTrack: getPlaylistSong(queue[0]) }))
  //   }
  // }

  // // handle playlist change
  // const handlePlaylistChange = (playlistId: string) => {
  //   // get playlist by id
  //   const newPlaylist = samplePlaylist.find(playlist => playlist.id === playlistId);
  //   if (newPlaylist) {
  //     if (workingPlaylist) {
  //       try {
  //         workingPlaylist.pause();
  //         workingPlaylist.stop();
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     const newQueue = newPlaylist.songsArray;

  //     setPlaylist((pre) => ({ ...pre, currentPlaylist: newPlaylist, queue: newQueue }));
  //     setPlayBackControl((pre) => ({ ...pre, currentTrack: getPlaylistSong(newQueue[0]) }));
  //     setWorkingPlaylist(() => getWorkingPlaylist({ queue: newQueue, volume: volume.current }));
  //   }
  // }

  // // handle playback mode change
  // const handlePlayBackMode = (action: "shuffle" | "repeat") => {
  //   if (action === "shuffle") {
  //     setPlayBackMode(pre => ({ ...pre, shuffle: !pre.shuffle }))
  //   }

  //   if (action === "repeat") {
  //     setPlayBackMode(pre => ({
  //       ...pre,
  //       repeat: pre.repeat === "repeat-none"
  //         ? "repeat-all" : pre.repeat === "repeat-all"
  //           ? "repeat-one" : "repeat-none"
  //     }))
  //   }
  // }

  // // play song by id 
  // const playSongById = (playlistId: string, songId: string) => {
  //   let playlistC: SamplePlaylistProps | undefined = playlist.currentPlaylist;
  //   if (playlistC.id !== playlistId) {
  //     // find playlist by id 
  //     playlistC = playlists.find(playlist => playlist.id === playlistId);
  //   }

  //   if (playlistC) {
  //     const newQueue = playlistC.songsArray;
  //     setPlaylist({ currentPlaylist: playlistC, queue: newQueue });
  //     // find song by id
  //     const song = songs.find(song => song.id === songId);
  //     if (song) {
  //       setPlayBackControl((pre) => ({ isPlaying: true, currentTrack: song }));
  //       setWorkingPlaylist(() => getWorkingPlaylist({ queue: newQueue, volume: volume.current }));
  //     }
  //   }
  // }


  // useEffect(() => {
  //   if (workingPlaylist && playBackControl.isPlaying) {
  //     for (let i = 0; i < songs.length; i++) {
  //       if (songs[i].id === playBackControl.currentTrack.id) break;
  //       else workingPlaylist.next();
  //     }
  //     workingPlaylist.play();
  //   }
  // }, [workingPlaylist, playBackControl]);


  return (
    <AudioContext.Provider
      value={{
        ...state,
        setVolume,
        muteVolume,
        unMuteVolume,
        // handlePlayPauseTrack,
        // handlePlaylistTrackChange,
        // handlePlaylistChange,
        // handleVolume,
        // handlePlayBackMode,
        // playSongById,
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };