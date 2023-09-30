import { AUTH_COOKIE_NAME } from "@/constant";
import { UserSchema } from "@/types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { NextResponse } from "next/server";
import { signJwtPayload } from "./JwtToken";


/**
 * Sends an authentication token to the client.
 * 
 * @param cookies - A function that returns the request cookies.
 * @param user - An object containing the user's details.
 * @param message - (optional) A string message to include in the response.
 * @returns A JSON response object with the success flag, user details, and optional message.
 */
export default async function sendAuthToken(
  { cookies,
    user,
    message }:
    {
      cookies: () => ReadonlyRequestCookies,
      user: UserSchema,
      message?: string,
    }
) {
  const payload = await signJwtPayload(String(user._id))
  cookies().set(AUTH_COOKIE_NAME, payload);
  return NextResponse.json({ success: message || true, item: { user } });
}
