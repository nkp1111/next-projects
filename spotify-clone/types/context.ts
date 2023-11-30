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
  workingPlaylist: AudioPlaylistType,
}

interface ContextParams extends DefaultStateParams {
  setVolume: (volume: number) => void,
  muteVolume: () => void,
  unMuteVolume: () => void,
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