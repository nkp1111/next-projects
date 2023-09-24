import { verify, sign } from "jsonwebtoken"
import { AUTH_COOKIE_NAME, JWT_SECRET_TOKEN } from "@/constant"
import { cookies } from "next/headers"

export async function verifyUser() {
  const token = cookies().get(AUTH_COOKIE_NAME) as any;
  if (token) {
    return await verify(
      token.value,
      JWT_SECRET_TOKEN,
    )
  }
  return false;
}

export async function signJwtPayload(payload: string) {
  return await sign(
    payload,
    JWT_SECRET_TOKEN,
  )
}
