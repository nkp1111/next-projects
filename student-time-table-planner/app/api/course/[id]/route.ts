import { verifyAuthToken } from '@/lib/auth/authToken';
import Class from '@/models/classes'
import Course from '@/models/courses'
import Student from '@/models/students';
import { ClassType, CourseType } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

// get course details
export async function GET(
  request: NextRequest, { params: { id } }: { params: { id: string } }
) {
  try {
    const course: (CourseType | null) = await Course.findById(id).populate("classes") as CourseType;
    return NextResponse.json({ course, success: "Course details fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}


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


// update course of given id
export async function PATCH(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const courseData: CourseType = await request.json()
    let course = await Course.findById(id);
    let newCourseClasses = [];
    if (course) {
      // update class if _id present else create new class
      for (let classD of courseData.classes) {
        if (typeof classD !== "string") {
          if (classD._id) {
            await Class.updateOne({ _id: classD._id }, { $set: classD });
            newCourseClasses.push(classD);
          } else {
            const newClass = await Class.create(classD);
            newCourseClasses.push(newClass);
          }
        }
      }

      courseData.classes = newCourseClasses;
      await Course.updateOne({ _id: id }, { $set: courseData });
      return NextResponse.json({ success: "course updated" })
    } else {
      return NextResponse.json({ error: "Course not found" }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

// delete course of given id
export async function DELETE(
  request: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  try {
    const course: (CourseType | null) = await Course.findById(id);
    if (course) {
      await Class.deleteMany({ _id: { $in: course.classes } })
      await Course.deleteOne({ _id: id });
    }
    return NextResponse.json({ success: "Course deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
