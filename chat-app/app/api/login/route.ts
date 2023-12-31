import { NextResponse } from 'next/server';
import User from "@/model/user";
import sendToken from '@/lib/sendToken';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "username, email, password and confirmPassword are all required" },
        { status: 400 },
      )
    }

    const user = await User.findOne({ email }).populate("friends");
    if (!user) {
      return NextResponse.json(
        { error: "Email or password is incorrect" },
        { status: 400 },
      )
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Email or password is incorrect" },
        { status: 400 },
      )
    }

    return await sendToken(user, "User logged in successfully");
  } catch (error) {
    return NextResponse.json({ error })
  }
}
