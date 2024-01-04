import { SamplePlaylistProps } from "@/types";

const playlists: SamplePlaylistProps[] = [
  {
    id: "1",
    _id: "1",
    playlistName: "Electronic",
    createdBy: "Developer",
    numberOfSongs: 3,
    totalDuration: 962,
    image:
      "https://raw.githubusercontent.com/codedamn-projects/spotify-audio-player-clone/master/images/Electronic.jpg",
    songsArray: [
      "PbM6xHE9aF",
      "3SAs2YaWH6",
      "Cax8ZhYuQ4",
    ],
    lastPlayed: "2023-11-20T06:47:47.932Z",
  },
  {
    id: "2",
    _id: "2",
    playlistName: "Soothing Tunes",
    createdBy: "Developer",
    numberOfSongs: 2,
    totalDuration: 962,
    image:
      "https://raw.githubusercontent.com/codedamn-projects/spotify-audio-player-clone/master/images/Electronic.jpg",
    songsArray: [
      "WSb7c0LQub",
      "Zcd1HIcopz",
    ],
    lastPlayed: "2023-11-20T01:47:47.932Z",
  },
];

export default playlists;