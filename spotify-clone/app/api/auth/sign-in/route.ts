import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json({ user: { name: "neeraj", habit: "coding" } }, { status: 200 });
}
