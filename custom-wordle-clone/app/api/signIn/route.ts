import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { UserSchema } from "@/type"


export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const newUser: (UserSchema | null) = await User.findOne({
      where: { email }
    }) as any;

    if (newUser) {
      const passwordMatch = newUser.password === password;
      if (passwordMatch) {
        newUser.password = "";
        return NextResponse.json({ success: true, message: "User Logged In", user: newUser });
      }
    }

    return NextResponse.json({ success: false, message: "Email or password is incorrect" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}