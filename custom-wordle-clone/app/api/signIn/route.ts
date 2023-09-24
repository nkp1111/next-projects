import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { UserDetailSchema } from "@/type"
import sendAuthToken from "@/lib/auth/sendAuthToken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const newUser: (UserDetailSchema | null) = await User.findOne({
      where: { email }
    }) as any;

    // if user and password match logged in user
    if (newUser) {
      const passwordMatch = newUser.password === password;
      if (passwordMatch) {
        newUser.password = "";

        return sendAuthToken({
          cookies,
          user: newUser,
          message: "User Logged In",
        })
      }
    }

    // if no user or password match failed fails
    return NextResponse.json({ success: false, message: "Email or password is incorrect" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}