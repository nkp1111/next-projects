import { SamplePlaylistProps, SampleSongsProps } from ".";

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
  setVolume: React.Dispatch<React.SetStateAction<VolumeParam>>,
}


export type {
  VolumeParam,
  PlaylistParam,
  RepeatParam,
  PlayBackControlParam,
  PlayBackModeParam,
  ContextParams,
};