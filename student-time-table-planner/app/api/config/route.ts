import mongoose from "mongoose";
import { NextResponse } from "next/server";

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export async function GET() {
  try {
    await mongoose.connect(mongoUrl)
    console.log("success")
    return NextResponse.json({ success: "Mongo DB connected" })
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error }, { status: 500 })
  }
}
