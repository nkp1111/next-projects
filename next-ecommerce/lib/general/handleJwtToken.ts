import { sign, verify } from "jsonwebtoken";

const jwtSecret: string = process.env.JWT_SECRET || "someothersecret";

/**
 * @desc Takes a payload encrypt it and returns token
 * @param payload - string, object
 * @returns 
 */
export async function signToken(payload: string | object) {
  return await sign(payload, jwtSecret);
}

/**
 * @desc Takes a token decrypt it and returns payload
 * @param token - string
 * @returns 
 */
export async function verifyToken(token: string) {
  return await verify(token, jwtSecret);
}
