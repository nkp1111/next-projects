import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/students";
import { StudentType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, photo, bio }: StudentType = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 })
    }

    // TODO: upload image to cloudinary and save img link

    const student = await Student.create({ name, email, password, photo, bio })
    const successMessage = "Student registered successfully"
    return sendAuthToken(student, successMessage);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
