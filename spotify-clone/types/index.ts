import { ObjectId } from "mongodb";
import type { IconType } from "react-icons";

interface SidebarNavProps {
  id: number;
  title: string;
  icon: IconType;
  link: string;
  containerClass?: string;
}

interface DisplayNavProps extends SidebarNavProps {
  active: boolean;
}

interface SampleSongsProps {
  id: string;
  _id: ObjectId | string;
  name: string;
  duration: number;
  artist: string;
  album: string;
  image: string;
  lastPlayed: string | number | Date;
  audio: any;
  createdAt?: string;
  updatedAt?: string;
}

interface SamplePlaylistProps {
  id: string;
  _id: ObjectId | string;
  playlistName: string;
  createdBy: string;
  numberOfSongs: number;
  totalDuration: number;
  image: string;
  songsArray: string[];
  lastPlayed: string | number | Date;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}


export type {
  SidebarNavProps,
  SampleSongsProps,
  SamplePlaylistProps,
  DisplayNavProps,
}