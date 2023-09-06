import mongoose from 'mongoose'

export default async function connectMongo(mongoUrl: string) {
  try {
    console.log("Trying to connect mongoDB");
    await mongoose.connect(mongoUrl);
    return { success: "Mongo DB Connected" }
  } catch (error) {
    return { error }
  }
}

