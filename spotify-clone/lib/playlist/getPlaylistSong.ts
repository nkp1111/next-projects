import playlists from '@/constant/samplePlaylists'
import songs from '@/constant/sampleSongs'

export default function getPlaylistSong(songId: string, playlistId?: string) {
  const song = songs.find(song => song.id === songId) || songs[0];
  return song;
}


// export async function getPlaylistSong(songId: string, playlistId?: string) {
//   "use server"
//   const { db, error } = await getMongoDB();
//   if (!db || error) return playlists;

//   const songsFetched = await db.collection(COLLECTIONS.tracks).find({}).toArray();
//   return songsFetched;
// }