import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import sendAuthToken from "@/lib/sendAuthToken";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();
    const newUser = await User.create(user) as any;
    newUser.password = "";

    return sendAuthToken({
      cookies,
      user: newUser,
      message: "User Registered",
    })

  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
