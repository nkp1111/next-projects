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
import { MODE_ACTION, PLAYLIST_ACTION, TRACK_ACTION, VOLUME_ACTION } from '@/reducer/action';


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

  const handlePlayPauseTrack = () => {
    dispatch({ type: TRACK_ACTION.PLAY_PAUSE })
  }

  const handlePlayBackMode = (action: "shuffle" | "repeat") => {
    if (action === "shuffle") {
      dispatch({ type: MODE_ACTION.SHUFFLE })
    }

    if (action === "repeat") {
      dispatch({ type: MODE_ACTION.REPEAT })
    }
  }

  const setCurrentPlaylist = (playlistId: string) => {
    dispatch({ type: PLAYLIST_ACTION.SET, payload: { playlistId } })
  }

  useEffect(() => {
    setCurrentPlaylist(playlists[0].id)
  }, []);

  const handlePlaylistTrackChange = (action: "next" | "prev") => {
    if (action === "next") {
      dispatch({ type: TRACK_ACTION.CHANGE_NEXT })
    }

    if (action === "prev") {
      dispatch({ type: TRACK_ACTION.CHANGE_PREV })
    }
  }

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


  return (
    <AudioContext.Provider
      value={{
        ...state,
        setVolume,
        muteVolume,
        unMuteVolume,
        handlePlayPauseTrack,
        setCurrentPlaylist,
        handlePlaylistTrackChange,
        // handlePlaylistChange,
        // handleVolume,
        handlePlayBackMode,
        // playSongById,
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };