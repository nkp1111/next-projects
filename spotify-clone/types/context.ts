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
  currentTrack: string,
  currentTime: number,
}

type RepeatParam = "repeat-none" | "repeat-one" | "repeat-all";

type PlayBackModeParam = {
  shuffle: false,
  repeat: RepeatParam,
}

type ContextParams = {
  volume: VolumeParam,
  setVolume: Dispatch<SetStateAction<VolumeParam>>,
  playlist: PlaylistParam,
  setPlaylist: Dispatch<SetStateAction<PlaylistParam>>,
  playBackControl: PlayBackControlParam,
  setPlayBackControl: Dispatch<SetStateAction<PlayBackControlParam>>,
  playBackMode: PlayBackModeParam,
  setPlayBackMode: Dispatch<SetStateAction<PlayBackModeParam>>,
  handlePlayPauseTrack: () => void,
  handlePlaylistTrackChange: (action: "next" | "prev") => void,
  handlePlaylistChange: (playlistId: string) => void,
}


export type {
  VolumeParam,
  PlaylistParam,
  RepeatParam,
  PlayBackControlParam,
  PlayBackModeParam,
  ContextParams,
};