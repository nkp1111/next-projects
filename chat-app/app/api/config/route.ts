import { NextResponse } from 'next/server'
import mongoConnect from '@/lib/mongoConnect'

export async function GET(request: Request) {
  try {
    await mongoConnect()
    return NextResponse.json({ success: "Mongo Database connected" });
  } catch (error) {
    return NextResponse.json({ success: "Mongo Database connection failed", error }, { status: 400 })
  }
}
