import playlists from "@/constant/samplePlaylists"
import getMongoDB from "../db/getMongoClient";
import { COLLECTIONS } from "@/constant/db";

export async function getAllSongs() {
  "use server"
  const { db, error } = await getMongoDB();
  if (!db || error) return playlists;

  const songsFetched = await db.collection(COLLECTIONS.tracks).find({}).toArray();
  return songsFetched;
}