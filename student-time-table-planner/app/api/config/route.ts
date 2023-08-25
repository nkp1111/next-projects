import connectMongo from "@/lib/general/connectMongo";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const { success, error } = await connectMongo()
    if (success) {
      return NextResponse.json({ success: "Mongo DB connected" })
    } else {
      return NextResponse.json({ error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
