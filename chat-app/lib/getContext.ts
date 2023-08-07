import { useContext } from "react"
import { AppContext } from "@/context"
import { ContextValue } from "@/types";


export const useGlobalContext = () => useContext(AppContext) as ContextValue;