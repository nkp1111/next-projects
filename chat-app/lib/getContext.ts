import { useContext } from "react"
import { AppContext } from "@/context"


export const useGlobalContext = () => useContext(AppContext);