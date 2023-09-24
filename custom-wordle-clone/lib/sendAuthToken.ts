import { AUTH_COOKIE_NAME } from "@/constant";
import { UserDetailSchema } from "@/type";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { NextResponse } from "next/server";
import { signJwtPayload } from "./JwtToken";


export default async function sendAuthToken(
  { cookies,
    user,
    message }:
    {
      cookies: () => ReadonlyRequestCookies,
      user: UserDetailSchema,
      message?: string,
    }
) {
  const payload = await signJwtPayload(user.userId)
  cookies().set(AUTH_COOKIE_NAME, payload);
  return NextResponse.json({ success: true, user, message });
}
