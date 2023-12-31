import { objectStringKeyAnyValueSchema } from "@/types";

// fetch api(internal) url's
export const REGISTER_URL = "/api/register"
export const LOGIN_URL = "/api/login"
export const DB_CONNECT_URL = "/api/dbConnect"

// database constants
export const DATABASE: string = "linkedInClone";
export const COLLECTIONS: objectStringKeyAnyValueSchema = {
  users: "users",
}


// jwt secret
export const JWT_SECRET_TOKEN = process.env.JWT_SECRET || "itssecretdonttellanyoneorsomethingbadwillnothappen";
// cookie name to be set on browser
export const AUTH_COOKIE_NAME = "linkedIn";