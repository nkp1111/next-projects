import { MongoClient } from 'mongodb'

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export default async function connectMongo() {
  try {
    const client = await MongoClient.connect(mongoUrl)
    return { success: "Mongo DB Connected" }
  } catch (error) {
    return { error }
  }
}
