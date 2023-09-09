import { NextRequest, NextResponse } from "next/server";
import { StudentLoginType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";
import { COLLECTIONS } from "@/constant";
import { comparePassword } from "@/lib/auth/authPassword";
import getMongoDB from "@/lib/general/getMongoDB";

export async function POST(request: NextRequest) {
  try {
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const { email, password }: StudentLoginType = await request.json();

    // if email and password are provided
    if (email && password) {
      let student = await db.collection(COLLECTIONS.students).findOne({ email });
      let passwordMatch = false;
      if (student) {
        passwordMatch = await comparePassword(password, student.password);
      }

      if (!student || !passwordMatch) {
        return NextResponse.json({ error: "Email or password or both is/are incorrect" },
          { status: 400 })
      }

      const successMessage = "Student logged In successfully"
      return sendAuthToken(student as never, successMessage);
    } else {
      return NextResponse.json({ error: "Both email and password are required" }, { status: 400 })
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 505 })
  }
}
