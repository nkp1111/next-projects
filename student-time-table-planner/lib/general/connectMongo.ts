import mongoose from 'mongoose'

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export default async function connectMongo() {
  try {
    await mongoose.connect(mongoUrl)
    return { success: "Mongo DB Connected" }
  } catch (error) {
    return { error }
  }
}
