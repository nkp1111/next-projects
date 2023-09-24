import { verifyUser } from "@/lib/JwtToken";
import User from "@/models/user"
import { NextResponse } from "next/server";

export async function GET() {
  const userId = await verifyUser();
  if (userId) {
    const user = await User.findOne({
      where: { userId }
    })
    return NextResponse.json({ success: true, user, message: "User fetched from cookies" })
  }

  return NextResponse.json({ success: false, error: "No user found please login first" })
}