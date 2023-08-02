import { NextResponse } from 'next/server'
import mongoConnect from '@/lib/mongoConnect'

export async function GET(request: Request) {
  try {
    await mongoConnect()
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 })
  }
}
