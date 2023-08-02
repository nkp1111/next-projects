import { connect } from "mongoose";

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export default async function mongoConnect() {
  try {
    await connect(mongoUrl);
    console.log("Mongo database connected successfully")
  } catch (error) {
    console.log(error)
    console.log("Database not connected")
  }
}
