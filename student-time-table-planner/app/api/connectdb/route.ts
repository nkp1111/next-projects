import connectMongo from "@/lib/general/mongoDB";
import { NextRequest, NextResponse } from "next/server";

// variables defined in env file
const mongoUrl: string = process.env.MONGO_URL as string;

export async function GET(request: NextRequest) {
  try {
    await connectMongo(mongoUrl)
    return NextResponse.json({ success: "Mongo DB connected" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 505 })
  }
}
