// NOTE: this method of sign in is temporary put on hold(remove or add later)
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json({ user: { name: "neeraj", habit: "coding" } }, { status: 200 });
}
