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
  name: string;
  duration: number;
  artist: string;
  album: string;
  image: string;
}


interface SamplePlaylistProps {
  playlistName: string;
  createdBy: string;
  numberOfSongs: number;
  totalDuration: number;
  image: string;
  songsArray: string[]
}

export type {
  SidebarNavProps,
  SampleSongsProps,
  SamplePlaylistProps,
  DisplayNavProps,
}