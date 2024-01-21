import { DefaultStateParams, RepeatParam } from "@/types/context";
import { MODE_ACTION, PLAYLIST_ACTION, TRACK_ACTION, VOLUME_ACTION } from "./action";
import playlists from "@/constant/samplePlaylists";
import getWorkingPlaylist from "@/lib/playlist/getWorkingPlaylist";
import songs from "@/constant/sampleSongs";
import { SampleSongsProps } from "@/types";
import { getAllSongs } from "@/lib/playlist/getAllSongs"


export const reducer = (
  state: DefaultStateParams,
  action: { type: string, payload?: any }
): DefaultStateParams => {

  const currentTrack = state.playBackControl.currentTrack;
  const queue = state.playlist.queue;
  const currentTrackInd = queue.indexOf(currentTrack.id);


  switch (action.type) {
    // volume change 
    case VOLUME_ACTION.CHANGE:
      const { volume } = action?.payload;
      return {
        ...state,
        volume: { current: volume, prev: state.volume.prev }
      };

    case VOLUME_ACTION.MUTE:
      const currentVolume = state.volume.current;
      return {
        ...state,
        volume: { prev: currentVolume, current: 0 }
      };

    case VOLUME_ACTION.UNMUTE:
      const prevVolume = state.volume.prev;
      return {
        ...state,
        volume: { current: prevVolume || 20, prev: 0 }
      };



    // track change
    case TRACK_ACTION.TRACK_SET:
      const { songId } = action.payload;
      const song = songs.find(song => song.id === songId);
      if (song) {
        return {
          ...state,
          playBackControl: { ...state.playBackControl, currentTrack: song },
        };
      } else {
        return { ...state };
      }

    case TRACK_ACTION.PLAY_PAUSE:
      const isPlayingEarlier = state.playBackControl.isPlaying;
      return {
        ...state,
        playBackControl: { ...state.playBackControl, isPlaying: !isPlayingEarlier }
      };

    case TRACK_ACTION.CHANGE_NEXT:
      if (currentTrackInd < queue.length - 1) {
        const nextTrack = songs.find(song => song.id === queue[currentTrackInd + 1]);
        if (nextTrack) {
          return {
            ...state,
            playBackControl: { ...state.playBackControl, currentTrack: nextTrack }
          }
        }
      }
      return { ...state };

    case TRACK_ACTION.CHANGE_PREV:
      console.log('change previous', currentTrackInd)
      if (currentTrackInd > 0) {
        const prevTrack = songs.find(song => song.id === queue[currentTrackInd - 1]);
        console.log(currentTrackInd, prevTrack, queue[currentTrackInd - 1]);
        if (prevTrack) {
          return {
            ...state,
            playBackControl: { ...state.playBackControl, currentTrack: prevTrack }
          }
        }
      }
      return { ...state };


    // mode change
    case MODE_ACTION.SHUFFLE:
      const isShuffle = state.playBackMode.shuffle;
      return {
        ...state,
        playBackMode: { ...state.playBackMode, shuffle: !isShuffle }
      };

    case MODE_ACTION.REPEAT:
      const newRepeat = state.playBackMode.repeat === "repeat-none"
        ? "repeat-all" : state.playBackMode.repeat === "repeat-all"
          ? "repeat-one" : "repeat-none";
      return {
        ...state,
        playBackMode: { ...state.playBackMode, repeat: newRepeat }
      };


    // playlist
    case PLAYLIST_ACTION.PLAYLIST_SET:
      const { playlistId }: { playlistId: string } = action.payload;
      const playlist = playlists.find(playlist => playlist.id === playlistId);
      if (playlist) {
        const queue = playlist.songsArray;
        const song = songs.find(song => song.id === queue[0]) as SampleSongsProps;
        return {
          ...state,
          playlist: {
            ...state.playlist, currentPlaylist: playlist, queue,
          },
          playBackControl: { ...state.playBackControl, currentTrack: song }
        }
      }
      return { ...state };


    default:
      console.log('unknown action type');
      break;
  }
  return state;
}