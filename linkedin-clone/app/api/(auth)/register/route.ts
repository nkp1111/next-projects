import { NextRequest, NextResponse } from "next/server";
import getMongoDB from "@/lib/db/getMongoDB";
import sendAuthToken from "@/lib/auth/sendAuthToken";
import { cookies } from "next/headers";
import { COLLECTIONS } from "@/constant";

export async function POST(request: NextRequest) {
  try {
    // get mongodb database connection
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    // get user info from request body
    const userInfo = await request.json();

    // if user exists
    const userExists = await db.collection(COLLECTIONS.users).findOne({ email: userInfo.email });
    if (userExists) return NextResponse.json({ error: "User with that email already exists" }, { status: 400 });

    // if user not exists, create new user
    let { acknowledged, insertedId }: any = await db.collection(COLLECTIONS.users).insertOne(userInfo);
    if (!acknowledged) {
      return NextResponse.json({ error: "Error during adding user info to database" }, { status: 500 });
    }
    const user: any = await db.collection(COLLECTIONS.users).findOne({ _id: insertedId });

    // send authentication token on cookie with message
    return sendAuthToken({ cookies, user, message: "User register successfully" });

  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error), message: "Error during register route" });
  }
}
