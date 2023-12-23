"use client";

import { DefaultStateParams, PlayBackControlParam, PlayBackModeParam, PlaylistParam, VolumeParam } from '@/types/context';
import React, { createContext, useContext, useEffect, useState, useReducer, useCallback } from 'react'
import samplePlaylist from '@/constant/samplePlaylists';
import getWorkingPlaylist from '@/lib/playlist/getWorkingPlaylist';
import getPlaylistSong from '@/lib/playlist/getPlaylistSong';
import playlists from '@/constant/samplePlaylists';
import { reducer } from '@/reducer';
import { MODE_ACTION, PLAYLIST_ACTION, TRACK_ACTION, VOLUME_ACTION } from '@/reducer/action';
import { AudioPlaylistType } from 'ts-audio';


const currentPlaylist = samplePlaylist[0];
const defaultState: DefaultStateParams = {
  volume: { prev: 0, current: 80 },
  playlist: { currentPlaylist, queue: currentPlaylist.songsArray },
  playBackControl: { isPlaying: false, currentTrack: getPlaylistSong(currentPlaylist.songsArray[0]) },
  playBackMode: { shuffle: false, repeat: "repeat-none" },
}

const AudioContext = createContext<any>(null);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [workingPlaylist, setWorkingPlaylist] = useState<{ current: number, playlist: AudioPlaylistType | null }>({
    current: -1,
    playlist: null,
  });

  const playPause = (state: DefaultStateParams,
    workingPlaylist: { current: number, playlist: AudioPlaylistType | null }) => {
    if (workingPlaylist.playlist) {
      if (state.playBackControl.isPlaying) {
        workingPlaylist.playlist.pause();
      } else {
        workingPlaylist.playlist.play();
      }
    }
  }

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
    playPause(state, workingPlaylist)
  }

  const handlePlayBackMode = (action: "shuffle" | "repeat") => {
    if (action === "shuffle") {
      dispatch({ type: MODE_ACTION.SHUFFLE })
    }
    if (action === "repeat") {
      dispatch({ type: MODE_ACTION.REPEAT });
    }
  }

  const setCurrentTrack = (songId: string) => {
    dispatch({ type: TRACK_ACTION.TRACK_SET, payload: { songId } });
    playPause(state, workingPlaylist)
  }

  const setCurrentPlaylist = (playlistId: string) => {
    setWorkingPlaylist((pre) => ({ ...pre, current: 0 }));
    dispatch({ type: PLAYLIST_ACTION.PLAYLIST_SET, payload: { playlistId } })
    // playPause(state, workingPlaylist)
  }

  const handlePlaylistTrackChange = (action: "next" | "prev") => {
    if (action === "next") {
      dispatch({ type: TRACK_ACTION.CHANGE_NEXT })
    }
    if (action === "prev") {
      dispatch({ type: TRACK_ACTION.CHANGE_PREV })
    }
  }


  useEffect(() => {
    setCurrentPlaylist(playlists[0].id);
  }, []);


  useEffect(() => {
    // set playlist current volume
    const setPlaylistVolume = (volume: number) => {
      if (workingPlaylist.playlist) workingPlaylist.playlist.volume = volume / 100;
    }
    setPlaylistVolume(state.volume.current)
    return () => setPlaylistVolume(state.volume.current);
  }, [state.volume, workingPlaylist]);


  useEffect(() => {
    // change playlist
    const setNewPlaylist = () => {
      try {
        if (workingPlaylist.playlist) workingPlaylist.playlist.stop();
      } catch (error) {
        // console.log(error);
      }

      setWorkingPlaylist((pre) => ({
        ...pre,
        playlist: getWorkingPlaylist({
          queue: state.playlist.queue,
          volume: state.volume.current,
        }),
        current: 0,
      }))
    }
    setNewPlaylist();
    return () => setNewPlaylist();
  }, [state.playlist.queue]);


  useEffect(() => {
    // track change
    const currentTrack = state.playBackControl.currentTrack;
    const queue = state.playlist.queue;
    const newTrackInd = queue.indexOf(currentTrack.id);
    const playlistTrackInd = Math.max(workingPlaylist.current, 0);

    // playlist not change //
    if (playlistTrackInd < newTrackInd) {
      // get next track
      for (let i = playlistTrackInd; i < newTrackInd; i++) {
        if (workingPlaylist.playlist) {
          workingPlaylist.playlist.pause()
          workingPlaylist.playlist.next()
        }
      }
      // set current playlist track index
      setWorkingPlaylist((pre) => ({ ...pre, current: newTrackInd }))
    }

    if (playlistTrackInd > newTrackInd) {
      // get prev track
      for (let i = playlistTrackInd; i > newTrackInd; i--) {
        if (workingPlaylist.playlist) {
          workingPlaylist.playlist.pause()
          workingPlaylist.playlist.prev()
        }
      }
      // set current playlist track index
      setWorkingPlaylist((pre) => ({ ...pre, current: newTrackInd }))
    }

  }, [state.playBackControl.currentTrack, state.playlist.queue, workingPlaylist]);


  useEffect(() => {
    // console.log(state)
  }, [state]);

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
        handlePlayBackMode,
        setCurrentTrack,
        workingPlaylist: workingPlaylist.playlist,
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };