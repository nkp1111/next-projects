import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      likedSongs: [string];
      playlist: [string];
    } & DefaultSession["user"];
  }
}