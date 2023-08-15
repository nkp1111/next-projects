import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/students";
import { StudentLoginType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";

export async function POST(request: NextRequest) {
  try {
    const { email, password }: StudentLoginType = await request.json();

    if (email && password) {
      const student = await Student.findOne({ email })
      let passwordMatch = false;
      if (student) {
        passwordMatch = await student.comparePassword(password);
      }

      if (!student || !passwordMatch) {
        return NextResponse.json({ error: "Email or password or both is/are incorrect" },
          { status: 400 })
      }

      const successMessage = "Student logged In successfully"
      return sendAuthToken(student, successMessage);
    } else {
      return NextResponse.json({ error: "Both email and password are required" }, { status: 400 })
    }

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}