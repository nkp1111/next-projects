import { verifyAuthToken } from '@/lib/auth/authToken'
import Student from '@/models/students'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const url = request.url;
    const isCourseWithClass = url.split("?").length > 0 && url.split("?")[1].split("=")[1] === "true";

    const studentId: string = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }

    let student;
    if (isCourseWithClass) {
      student = await Student.findById(studentId)
        .populate({
          path: "courses",
          populate: {
            path: "classes"
          }
        });

    } else {
      student = await Student.findById(studentId).populate(["courses", "classes"]);
    }

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }
    return NextResponse.json({ student, success: "Student's courses/class fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

