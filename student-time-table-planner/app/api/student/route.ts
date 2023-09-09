import { COLLECTIONS } from '@/constant'
import { verifyAuthToken } from '@/lib/auth/authToken'
import getMongoDB from '@/lib/general/getMongoDB'
import Student from '@/models/students'
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {

    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const url = request.url;
    const isCourseWithClass = url.split("?").length > 0 && url.split("?")[1].split("=")[1] === "true";

    const studentId: string = await verifyAuthToken();
    if (!studentId) {
      return NextResponse.json({ error: "Please login/register first" }, { status: 400 })
    }

    let student = await db.collection(COLLECTIONS.students).findOne({ _id: new ObjectId(studentId) });
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 400 });
    }

    if (isCourseWithClass) {
      // mapping all courses string ids to object ids
      const courseIds = student.courses.map((courseId: string) => new ObjectId(courseId));
      // getting student courses from ids
      const studentCourses = await db.collection(COLLECTIONS.courses).find({ _id: { $in: courseIds } }).toArray();

      const studentCoursesDetail: any[] = [];
      for (let course of studentCourses) {
        const classIds = course.classes.map((classId: string) => new ObjectId(classId));
        const courseClasses = await db.collection(COLLECTIONS.classes).find({ _id: { $in: classIds } }).toArray();
        course.classes = courseClasses;
        studentCoursesDetail.push(course);
      }
      // setting student courses detail info
      student.courses = studentCoursesDetail;

    } else {
      // mapping all string ids to object ids
      const courseIds = student.courses.map((courseId: string) => new ObjectId(courseId));
      const classIds = student.classes.map((classId: string) => new ObjectId(classId));

      // getting student classes and courses from ids
      const studentCourses = await db.collection(COLLECTIONS.courses).find({ _id: { $in: courseIds } }).toArray();
      const studentClasses = await db.collection(COLLECTIONS.classes).find({ _id: { $in: classIds } }).toArray();

      // setting student classes and courses detail info
      student.courses = studentCourses;
      student.classes = studentClasses;
    }

    return NextResponse.json({ student, success: "Student's courses/class fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

