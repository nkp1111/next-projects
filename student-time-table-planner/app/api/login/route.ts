import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/students";
import { StudentLoginType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  try {
    const { email, password }: StudentLoginType = await request.json();
    console.log("login api", email, password)
    if (email && password) {
      let student;
      try {
        if (mongoose.connection.readyState === 1) {
          console.log('Mongoose is connected to the database.');
        } else {
          console.log('Mongoose is not currently connected to the database.');
        }
        student = await Student.findOne({ email })
      } catch (error) {
        console.log(error, "error on login api")
      }

      let passwordMatch = false;
      if (student) {
        console.log("student found", student, password)
        passwordMatch = await student.comparePassword(password);
      }

      console.log("student and password match", passwordMatch)
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
    console.log(error);
    return NextResponse.json({ error }, { status: 500 })
  }
}
