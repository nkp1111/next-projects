import { Dispatch, SetStateAction } from "react";

export interface ContextValue {
  currentListener: string,
  setCurrentListener: Dispatch<SetStateAction<string>>,
  currentUser: object,
  setCurrentUser: Dispatch<SetStateAction<object>>,
}


export type UserData = {
  _id: string,
  username: string,
  email: string,
  password?: string,
  avatar?: string,
  friends: UserData[],
}