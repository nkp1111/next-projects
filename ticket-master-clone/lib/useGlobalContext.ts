import { AppContext } from '@/context'
import { useContext } from "react"

export default function useGlobalContext() {
  return useContext(AppContext)
}
