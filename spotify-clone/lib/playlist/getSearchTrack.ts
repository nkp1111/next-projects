import playlists from "@/constant/samplePlaylists";
import songs from "@/constant/sampleSongs";

export default async function getSearchTrack(query: string) {
  query = query.toLowerCase();
  const topResultTitle = songs.filter(song => {
    if (song.name.toLowerCase().includes(query)) return true;
    return false;
  })
  const topResultAlbum = songs.filter(song => {
    if (song.album.toLowerCase().includes(query)) return true;
    return false;
  })
  const topResultArtist = songs.filter(song => {
    if (song.artist.toLowerCase().includes(query)) return true;
    return false;
  })

  const topResultTitlePlaylist = playlists.filter(playlist => {
    const topResultTitleIds = topResultTitle.map(song => song.id);
    const isPlaylist = playlist.songsArray.filter(songId => topResultTitleIds.includes(songId));
    if (isPlaylist) return true;
    return false;
  })

  return { track: { topResultTitle, topResultArtist, topResultAlbum }, playlist: { topResultTitlePlaylist } };
}
