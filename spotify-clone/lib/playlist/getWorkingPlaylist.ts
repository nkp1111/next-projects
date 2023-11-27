import playlists from "@/constant/samplePlaylists";
import songs from "@/constant/sampleSongs";
import { AudioPlaylist } from "ts-audio"

interface PlayPauseSongParams {
  queue: string[],
  volume: number,
}

export default function getWorkingPlaylist({
  queue,
  volume,
}: PlayPauseSongParams) {
  // get songs from queue
  const audioArrayOfPlaylist = queue.map(songId => {
    const song = songs.find(song => song.id === songId);
    return song?.audio
  }).filter(audio => audio);

  const workingPlaylist = AudioPlaylist({
    files: audioArrayOfPlaylist,
    volume: volume / 100,
    loop: false,
    shuffle: false,
  })

  return workingPlaylist;
}
