import { DefaultStateParams, RepeatParam } from "@/types/context";
import { MODE_ACTION, PLAYLIST_ACTION, TRACK_ACTION, VOLUME_ACTION } from "./action";
import playlists from "@/constant/samplePlaylists";
import getWorkingPlaylist from "@/lib/playlist/getWorkingPlaylist";


export const reducer = (
  state: DefaultStateParams,
  action: { type: string, payload?: any }
): DefaultStateParams => {

  switch (action.type) {
    // volume change 
    case VOLUME_ACTION.CHANGE:
      const { volume } = action?.payload;
      return { ...state, volume: { current: volume, prev: state.volume.prev } };
    case VOLUME_ACTION.MUTE:
      const currentVolume = state.volume.current;
      return { ...state, volume: { prev: currentVolume, current: 0 } };
    case VOLUME_ACTION.UNMUTE:
      const prevVolume = state.volume.prev;
      return { ...state, volume: { current: prevVolume || 20, prev: 0 } };


    case TRACK_ACTION.PLAY_PAUSE:
      const isPlayingEarlier = state.playBackControl.isPlaying;
      if (state.workingPlaylist) {
        !isPlayingEarlier
          ? state.workingPlaylist.play()
          : state.workingPlaylist.pause();
      }
      return { ...state, playBackControl: { ...state.playBackControl, isPlaying: !isPlayingEarlier } };
    case TRACK_ACTION.CHANGE_NEXT:
      // change next track
      return { ...state };
    case TRACK_ACTION.CHANGE_PREV:
      // change to previous track
      return { ...state };


    case MODE_ACTION.SHUFFLE:
      const isShuffle = state.playBackMode.shuffle;
      return { ...state, playBackMode: { ...state.playBackMode, shuffle: !isShuffle } };
    case MODE_ACTION.REPEAT:
      const newRepeat = state.playBackMode.repeat === "repeat-none"
        ? "repeat-all" : state.playBackMode.repeat === "repeat-all"
          ? "repeat-one" : "repeat-none";
      return { ...state, playBackMode: { ...state.playBackMode, repeat: newRepeat } };


    case PLAYLIST_ACTION.SET:
      const { playlistId }: { playlistId: string } = action.payload;
      const playlist = playlists.find(playlist => playlist.id === playlistId);
      const newState = { ...state }
      if (playlist) {
        // change playlist
        newState.playlist = { currentPlaylist: playlist, queue: playlist.songsArray };
        // change working playlist
        newState.workingPlaylist = getWorkingPlaylist({ queue: playlist.songsArray, volume: state.volume.current });
      }
      return newState;


    default:
      console.log('unknown action type');
      break;
  }
  return state;
}