import { AUTH_COOKIE_NAME } from "@/constant"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  cookies().delete(AUTH_COOKIE_NAME)
  return NextResponse.json({ success: true, message: "User logged out" });
}
