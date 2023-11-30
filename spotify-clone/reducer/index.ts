import { DefaultStateParams } from "@/types/context";
import { VOLUME_ACTION } from "./action";


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

    default:
      console.log('unknown action type');
      break;
  }
  return state;
}