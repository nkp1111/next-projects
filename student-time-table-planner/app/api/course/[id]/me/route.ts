import { verifyAuthToken } from "@/lib/auth/authToken";
import Student from "@/models/students";
import { CourseType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

// add course/class to student timetable
export async function POST(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const studentId = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }

    const { classes }: { classes: string } = await request.json();

    if (!student.courses.includes(id)) {
      student.courses.push(id);
    }
    if (classes && !student.classes.includes(classes)) {
      student.classes.push(classes);
    }
    await student.save();
    return NextResponse.json({ success: "Course/Class Added to TimeTable" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}


// remove course/class from student timetable
export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const studentId = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }

    const student = await Student.findById(studentId).populate("courses");
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }

    const { classId, courseId }:
      { classId?: string, courseId?: string } = await request.json();

    if (!classId && !courseId) {
      return NextResponse.json({ error: "Class Id and Course Id are not provided" }, { status: 400 })
    }

    if (courseId) {
      if (!student.courses.map((c: CourseType) => typeof c === "string" ? String(c) : String(c._id)).includes(courseId)) {
        return NextResponse.json({ error: "Course not found for user" }, { status: 400 })
      } else {
        student.courses = student.courses.filter((c: CourseType) => typeof c === "string" ? String(c) !== courseId : String(c._id) !== courseId);
        await student.save();
        return NextResponse.json({ success: "Course Removed from TimeTable" })
      }
    }

    if (classId) {
      if (!student.classes.includes(classId)) {
        return NextResponse.json({ error: "Class not found for user" }, { status: 400 })
      } else {
        student.classes = student.classes.filter((c: string) => String(c) !== classId);
        await student.save();
        return NextResponse.json({ success: "Class Removed from TimeTable" })
      }
    }

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}