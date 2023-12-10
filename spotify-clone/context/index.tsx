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
  const [playlistChange, setPlaylistChange] = useState(true);

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
      dispatch({ type: MODE_ACTION.REPEAT });
    }
  }

  const setCurrentTrack = (songId: string) => {
    dispatch({ type: TRACK_ACTION.TRACK_SET, payload: { songId } });
  }

  const setCurrentPlaylist = (playlistId: string) => {
    setWorkingPlaylist((pre) => ({ ...pre, current: 0 }));
    dispatch({ type: PLAYLIST_ACTION.PLAYLIST_SET, payload: { playlistId } })
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
    console.log('playlist volume change')
    // set playlist current volume
    const setPlaylistVolume = (volume: number) => {
      if (workingPlaylist.playlist) workingPlaylist.playlist.volume = volume / 100;
    }
    setPlaylistVolume(state.volume.current)
    return () => setPlaylistVolume(state.volume.current);
  }, [state.volume, workingPlaylist]);


  useEffect(() => {
    console.log("playlist change")
    // change playlist
    const setNewPlaylist = () => {
      if (workingPlaylist.playlist) workingPlaylist.playlist.stop();
      setWorkingPlaylist((pre) => ({
        ...pre,
        playlist: getWorkingPlaylist({
          queue: state.playlist.queue,
          volume: state.volume.current / 100
        }),
        current: 0,
      }))
    }
    setNewPlaylist();
    return () => setNewPlaylist();
  }, [state.playlist.queue]);


  useEffect(() => {
    console.log('track change');
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
    console.log('play/pause song')
    // play/pause current song
    const playPause = () => {
      if (state.playBackControl.isPlaying) {
        if (workingPlaylist.playlist) workingPlaylist.playlist.play();
      } else {
        if (workingPlaylist.playlist) workingPlaylist.playlist.pause();
      }
    }
    playPause();
    return () => playPause();
  }, [state.playBackControl.isPlaying, workingPlaylist.playlist]);


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
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };