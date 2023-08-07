import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import { UserData } from "@/types";

export default async function sendToken(
  user: UserData,
  message: string,
) {

  if (!user) return NextResponse.json({ error: "user is not present" }, { status: 400 })

  const token = await sign(
    { id: user._id },
    "secret_key",
    { expiresIn: "30m" },
  )

  cookies().set("token", token);

  return NextResponse.json({ token, user, success: message || true });
}