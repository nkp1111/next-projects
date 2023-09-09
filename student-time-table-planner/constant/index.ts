export const SERVER_URL: string = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const SECRET_JWT_TOKEN: string = process.env.NEXT_PUBLIC_SECRET_JWT_TOKEN || "secret";

export const DATABASE: string = "studentTimeTable"

export const COLLECTIONS: {
  readonly [key: string]: string
} = {
  students: "students",
  courses: "courses",
  classes: "classes",
}