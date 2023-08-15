import { StudentType } from '@/types';
import { NextResponse } from 'next/server';
import { cookies } from "next/headers";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { SECRET_JWT_TOKEN } from '@/constant';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export function sendAuthToken(
  user: StudentType,
  message: string,
) {
  const token = sign(
    { id: user._id },
    SECRET_JWT_TOKEN,
  )
  cookies().set("token", token);
  return NextResponse.json({ success: message, user })
}

export async function verifyAuthToken() {
  const token: (RequestCookie | undefined) = cookies().get("token");
  if (token) {
    const authData: (string | JwtPayload) = await verify(
      token.value,
      SECRET_JWT_TOKEN
    )

    console.log(authData)
  }
}
