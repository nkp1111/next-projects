import playlists from "@/constant/samplePlaylists"
import getMongoDB from "../db/getMongoClient";
import { COLLECTIONS } from "@/constant/db";


export async function getAllPlaylist() {
  "use server"
  const { db, error } = await getMongoDB();
  if (!db || error) return playlists;

  const playlistsFetched = await db.collection(COLLECTIONS.playlists).find({}).toArray();
  return playlistsFetched as any;
}
