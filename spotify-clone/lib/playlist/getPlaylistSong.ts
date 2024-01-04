import playlists from '@/constant/samplePlaylists'
import songs from '@/constant/sampleSongs'

export default function getPlaylistSong(songId: string, playlistId?: string) {
  const song = songs.find(song => song.id === songId) || songs[0];
  return song;
}
