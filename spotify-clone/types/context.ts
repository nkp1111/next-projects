import { AudioPlaylistType } from "ts-audio";
import { SamplePlaylistProps, SampleSongsProps } from ".";
import { Dispatch, SetStateAction } from 'react'

type VolumeParam = {
  prev: number,
  current: number,
}

type PlaylistParam = {
  currentPlaylist: SamplePlaylistProps,
  queue: string[],
}

type PlayBackControlParam = {
  isPlaying: boolean,
  currentTrack: SampleSongsProps,
}

type RepeatParam = "repeat-none" | "repeat-one" | "repeat-all";

type PlayBackModeParam = {
  shuffle: boolean,
  repeat: RepeatParam,
}


interface DefaultStateParams {
  volume: VolumeParam,
  playlist: PlaylistParam,
  playBackControl: PlayBackControlParam,
  playBackMode: PlayBackModeParam,
}

interface ContextParams extends DefaultStateParams {
  workingPlaylist: AudioPlaylistType,
  setVolume: (volume: number) => void,
  muteVolume: () => void,
  unMuteVolume: () => void,
  handlePlayPauseTrack: () => void,
  handlePlayBackMode: (action: "shuffle" | "repeat") => void,
  setCurrentPlaylist: (playlistId: string) => void,
  handlePlaylistTrackChange: (action: "prev" | "next") => void,
  setCurrentTrack: (songId: string) => void,
}



export type {
  VolumeParam,
  PlaylistParam,
  RepeatParam,
  PlayBackControlParam,
  PlayBackModeParam,
  ContextParams,
  DefaultStateParams,
};