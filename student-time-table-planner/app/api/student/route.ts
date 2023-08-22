import { verifyAuthToken } from '@/lib/auth/authToken'
import Class from '@/models/classes'
import Course from '@/models/courses'
import Student from '@/models/students'
import { ClassType, CourseType } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const studentId: string = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }
    let student = await Student.findById(studentId).populate(["courses", "classes"]);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }
    return NextResponse.json({ student, success: "Student's courses/class fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     const { title, teacher, classes }: CourseType = await request.json()
//     const allClasses: ClassType[] = [];
//     for (let classD of classes) {
//       const newClass = await Class.create(classD)
//       allClasses.push(newClass);
//     }

//     const course = await Course.create({ title, teacher, classes: allClasses })
//     return NextResponse.json({ course, success: "New course created" })
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 })
//   }
// }
