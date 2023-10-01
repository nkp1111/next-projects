import { NextRequest, NextResponse } from "next/server";
import getMongoDB from "@/lib/db/getMongoDB";
import sendAuthToken from "@/lib/auth/sendAuthToken";
import { cookies } from "next/headers";
import { COLLECTIONS } from "@/constant";
import { comparePassword } from "@/lib/auth/managePassword";

export async function POST(request: NextRequest) {
  try {
    // get mongodb database connection
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    // get user info from request body
    const { email, password } = await request.json();

    // check if user info is valid
    const user: any = await db.collection(COLLECTIONS.users).findOne({ email });
    if (!user) return NextResponse.json({ error: "Email or password is incorrect" }, { status: 400 });
    const passwordMatch = await comparePassword(password, user.password); // compare password
    if (!passwordMatch) return NextResponse.json({ error: "Email or password is incorrect" }, { status: 400 });

    // send authentication token on cookie with message
    return sendAuthToken({ cookies, user, message: "User logged In successfully" });

  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error), message: "Error during login route" });
  }
}