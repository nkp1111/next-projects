import mongoose from "mongoose";
import { NextResponse } from "next/server";

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export async function GET() {
  try {
    console.log("mongourl", mongoUrl)
    await mongoose.connect(mongoUrl)
    return NextResponse.json({ success: "Mongo DB connected" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
