
import { NextResponse } from 'next/server';
import User from "@/model/user"

export async function POST(request: Request) {
  try {
    const { username, email, password, confirmPassword } = await request.json();
    const userExist = await User.findOne({ email });

    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "username, email, password and confirmPassword are all required" },
        { status: 400 },
      )
    }

    if (userExist) {
      return NextResponse.json(
        { error: "User with that email already exists" },
        { status: 400 },
      )
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Password does not match" },
        { status: 400 },
      )
    }

    const user = await User.create({ username, email, password });
    return NextResponse.json({ success: "User successfully registered", user });

  } catch (error) {
    return NextResponse.json({ error })
  }
}
