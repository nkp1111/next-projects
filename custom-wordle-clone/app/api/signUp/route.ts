import User from "@/models/user";
import { UserSchema } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const user = await request.json();
    const newUser = await User.create(user) as any;
    newUser.password = "";
    return NextResponse.json({ success: true, user: newUser, message: "User Registered" });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
