import clientPromise from './mongodb_connect';
import { DATABASE } from '@/constant';

export default async function getMongoDB(
) {
  try {
    const client = await clientPromise;
    if (!client) return { error: "No client available" }
    const db = client.db(DATABASE);
    if (!db) return { error: "No database connection available" };
    return { db };
  } catch (error) {
    return { error }
  }
}
