import { verify, sign } from "jsonwebtoken"
import { AUTH_COOKIE_NAME, JWT_SECRET_TOKEN } from "@/constant"
import { cookies } from "next/headers"

/**
 * Checks cookies for a token, verifies the user from the token using a secret key, and returns the user's ID if the verification is successful.
 * @returns {Promise<string | boolean>} The user's ID if the verification is successful, otherwise false.
 */
export async function verifyUser() {
  const token = cookies().get(AUTH_COOKIE_NAME) as any;
  if (token) {
    return await verify(
      token.value,
      JWT_SECRET_TOKEN,
    );
  }
  return false;
}

/**
 * @desc Generates a token based on the provided payload and secret token.
 * @param payload - The payload string used to generate the token.
 * @returns The generated token.
 */
export async function signJwtPayload(payload: string) {
  return await sign(
    payload,
    JWT_SECRET_TOKEN,
  );
}
