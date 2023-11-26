type VolumeParam = {
  prev: number,
  current: number,
}


type ContextParams = {
  volume: VolumeParam,
  setVolume: React.Dispatch<React.SetStateAction<VolumeParam>>,
}



export type { VolumeParam, ContextParams };