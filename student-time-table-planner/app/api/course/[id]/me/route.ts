import { COLLECTIONS } from "@/constant";
import { verifyAuthToken } from "@/lib/auth/authToken";
import getMongoDB from "@/lib/general/getMongoDB";
import Student from "@/models/students";
import { CourseType, StudentType } from "@/types";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// add course/class to student timetable
export async function POST(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const studentId = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }

    const student = await db.collection(COLLECTIONS.students).findOne({ _id: new ObjectId(studentId) });
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }

    const { classes }: { classes: string } = await request.json();

    if (!student.courses.map((c: ObjectId) => String(c)).includes(id)) {
      student.courses.push(new ObjectId(id));
    }
    if (classes && !student.classes.map((c: ObjectId) => String(c)).includes(classes)) {
      student.classes.push(new ObjectId(classes));
    }

    await db.collection(COLLECTIONS.students).updateOne({ _id: new ObjectId(studentId) }, { $set: student });

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
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const studentId = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }

    const student = await db.collection(COLLECTIONS.students).findOne({ _id: new ObjectId(studentId) });
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }

    const { classId, courseId }:
      { classId?: string, courseId?: string } = await request.json();

    if (!classId && !courseId) {
      return NextResponse.json({ error: "Class Id and Course Id are not provided" }, { status: 400 })
    }

    if (courseId) {
      if (!student.courses.map((c: ObjectId) => String(c)).includes(courseId)) {
        return NextResponse.json({ error: "Course not found for user" }, { status: 400 })
      } else {
        student.courses = student.courses.filter((c: ObjectId) => String(c) !== courseId);
        const updatedStudentInfo: StudentType = { ...student } as never;
        delete updatedStudentInfo._id;
        await db.collection(COLLECTIONS.students).updateOne({ _id: student._id }, { $set: updatedStudentInfo });
        return NextResponse.json({ success: "Course Removed from TimeTable" })
      }
    }

    if (classId) {
      if (!student.classes.map((c: ObjectId) => String(c)).includes(classId)) {
        return NextResponse.json({ error: "Class not found for user" }, { status: 400 })
      } else {
        student.classes = student.classes.filter((c: string | ObjectId) => String(c) !== classId);
        const updatedStudentInfo: StudentType = { ...student } as never;
        delete updatedStudentInfo._id;
        await db.collection(COLLECTIONS.students).updateOne({ _id: student._id }, { $set: updatedStudentInfo });
        return NextResponse.json({ success: "Class Removed from TimeTable" })
      }
    }

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}