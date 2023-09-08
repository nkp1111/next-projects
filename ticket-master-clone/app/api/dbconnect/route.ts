import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

const mongoUrl: string = process.env.MONGODB_URI || process.env.MONGO_URL || "http://localhost:8080/ticket_master_clone"
export async function GET(request: NextRequest) {
  try {
    console.log("Trying to connect Mongo DB")
    await mongoose.connect(mongoUrl);
    return NextResponse.json({ success: "Mongo DB connected successfully" });
  } catch (error) {
    console.log("Mongo DB connection failed")
    return NextResponse.json({ error }, { status: 500 })
  }
}
