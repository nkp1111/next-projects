import { Dispatch, SetStateAction } from "react";

export interface ContextValue {
  currentListener: string,
  setCurrentListener: Dispatch<SetStateAction<string>>,
  currentUser: UserData,
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


export type Conversation = {
  _id: string,
  speaker: string,
  listener: string,
  text: string,
  createdAt: string,
}