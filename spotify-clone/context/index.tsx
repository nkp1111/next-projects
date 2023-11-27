"use client";

import { PlayBackControlParam, PlayBackModeParam, PlaylistParam, VolumeParam } from '@/types/context';
import React, { createContext, useContext, useEffect, useState } from 'react'
import samplePlaylist from '@/constant/samplePlaylists';
import getQueuePlaylist from '@/lib/playlist/getQueuePlaylist';
import getWorkingPlaylist from '@/lib/playlist/getWorkingPlaylist';

const AudioContext = createContext<any>(null);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const currentPlaylist = samplePlaylist[0];

  const [volume, setVolume] = useState<VolumeParam>({ prev: 0, current: 80 });

  const [playlist, setPlaylist] = useState<PlaylistParam>({ currentPlaylist, queue: currentPlaylist.songsArray });

  const [playBackControl, setPlayBackControl] = useState<PlayBackControlParam>({ isPlaying: false, currentTrack: playlist?.queue[0], currentTime: 0 });

  // TODO: handle shuffle and repeat
  const [playBackMode, setPlayBackMode] = useState<PlayBackModeParam>({ shuffle: false, repeat: "repeat-none" });

  const [workingPlaylist, setWorkingPlaylist] = useState<any>(getWorkingPlaylist({
    queue: playlist.queue,
    volume: volume.current
  }));


  /***************************************** */
  // handle volume of current playing song
  // change volume to new volume, mute and unmute
  const handleVolume = (
    { newVolume, action }: {
      newVolume?: number, action?: "mute" | "unmute"
    }) => {
    if (newVolume || newVolume === 0) {
      setVolume((pre) => ({ ...pre, current: newVolume }));
      workingPlaylist.volume = newVolume / 100;
    }

    if (action === "mute") {
      workingPlaylist.volume = 0;
      setVolume((pre) => ({ ...pre, prev: pre.current, current: 0 }));
    }

    if (action === "unmute") {
      workingPlaylist.volume = volume.prev / 100;
      setVolume((pre) => ({ ...pre, prev: 0, current: pre.prev || 10 }));
    }
  }

  // play and pause current playing song
  const handlePlayPauseTrack = () => {
    setPlayBackControl((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
    if (workingPlaylist) {
      workingPlaylist.toggle();
    }
  }

  const handlePlaylistTrackChange = (action: "next" | "prev") => {
    const { currentTrack } = playBackControl;
    const { queue } = playlist;
    const currentTrackNum = queue.indexOf(currentTrack);
    // if current track is present in playlist
    if (currentTrackNum !== -1) {
      let nextTrack = 0;
      if (action === "next") {
        nextTrack = currentTrackNum === queue.length - 1 ? currentTrackNum : currentTrackNum + 1;

        // change playlist song to next
        if (nextTrack === currentTrackNum + 1) workingPlaylist.next()
      }
      if (action === "prev") {
        nextTrack = currentTrackNum === 0 ? currentTrackNum : currentTrackNum - 1;

        // change playlist song to prev
        if (nextTrack === currentTrackNum - 1) workingPlaylist.prev()
      }

      setPlayBackControl((pre) => ({ ...pre, currentTrack: queue[nextTrack], currentTime: 0 }))
    } else {
      // get new song from playlist from start
      console.log("Track not in playlist");
      setPlayBackControl((pre) => ({ ...pre, currentTrack: queue[0], currentTime: 0 }))
    }
  }

  const handlePlaylistChange = (playlistId: string) => {
    // get playlist by id
    const newPlaylist = samplePlaylist.find(playlist => playlist.id === playlistId);
    if (newPlaylist) {
      setPlaylist((pre) => ({ ...pre, currentPlaylist: newPlaylist, queue: newPlaylist.songsArray }))
    }
  }


  useEffect(() => {
    setWorkingPlaylist(() => getWorkingPlaylist({ queue: playlist.queue, volume: volume.current }))
  }, [playlist]);

  return (
    <AudioContext.Provider
      value={{
        volume,
        setVolume,
        playlist,
        setPlaylist,
        playBackControl,
        setPlayBackControl,
        playBackMode,
        setPlayBackMode,
        handlePlayPauseTrack,
        handlePlaylistTrackChange,
        handlePlaylistChange,
        handleVolume,
      }}>
      {children}
    </AudioContext.Provider>
  )
}

export { AudioProvider, AudioContext, useContext };