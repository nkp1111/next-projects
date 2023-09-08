import clientPromise from '@/lib/mongodb';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    if (!client) return NextResponse.json({ error: "No client available" });
    const db = client.db("ticketMaster");
    if (!db) return NextResponse.json({ error: "No database connection available" });

    const { email, password } = await request.json();
    if (!email || !password) return NextResponse.json({ error: "email and password are required" }, { status: 400 });

    const user = await db.collection("users").findOne({ email });
    if (!user || user.password !== password) return NextResponse.json({ error: "Username or password is incorrect" }, { status: 400 });

    return NextResponse.json({ success: "User Signed In successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
