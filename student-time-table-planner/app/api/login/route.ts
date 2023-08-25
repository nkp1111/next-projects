import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/students";
import { StudentLoginType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";
import { connectMongo, disconnectMongo } from "@/lib/general/mongoDB";

export async function POST(request: NextRequest) {
  try {
    const { email, password }: StudentLoginType = await request.json();

    // if email and password are provided
    if (email && password) {
      // establish mongo connection
      const { success, error, client } = await connectMongo();
      if (error || !client) {
        return NextResponse.json({ error }, { status: 500 })
      } else {
        console.log(success, client)
      }

      let student;
      try {
        student = await Student.findOne({ email })
        console.log("student data fetched");
      } catch (error) {
        console.log(error, "error on login api")
      }

      let passwordMatch = false;
      if (student) {
        passwordMatch = await student.comparePassword(password);
      }

      if (!student || !passwordMatch) {
        return NextResponse.json({ error: "Email or password or both is/are incorrect" },
          { status: 400 })
      }

      // disconnect mongo db connection
      const { success: disconnectSuccess, error: disconnectError } = await disconnectMongo(client);
      if (disconnectError) {
        console.log("Error while disconnecting mongo `Login api route`")
      }

      const successMessage = "Student logged In successfully"
      return await sendAuthToken(student, successMessage);
    } else {
      return NextResponse.json({ error: "Both email and password are required" }, { status: 400 })
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 })
  }
}
