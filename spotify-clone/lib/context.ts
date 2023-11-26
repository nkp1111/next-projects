import { AudioContext, useContext } from '@/context'

export const useGlobalContext = () => useContext(AudioContext);