import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstName, lastName, country, zipCode } = await request.json();

    if (!email || !password) return NextResponse.json({ error: "email and password are required" }, { status: 400 });

    const userExist = await User.findOne({ email });
    if (userExist) return NextResponse.json({ error: "User already exists" }, { status: 400 });

    const user = await User.create({ email, password, firstName, lastName, country, zipCode });
    return NextResponse.json({ success: "User Signed Up successfully", user }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
