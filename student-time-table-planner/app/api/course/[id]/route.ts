import Class from '@/models/classes'
import Course from '@/models/courses'
import { ClassType, CourseType } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest, { params: { id } }: { params: { id: string } }
) {
  try {
    const course: (CourseType | null) = await Course.findById(id).populate("classes") as CourseType;
    return NextResponse.json({ course, success: "Course details fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

// export async function POST(
//   request: NextRequest, { params: { id } }: { params: { id: string } }
// ) {
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


// export async function PUT(
//   request: NextRequest,
//   { params: { id } }: { params: { id: string } }
// ) {
//   try {
//     const { courseId, classInfo }:
//       { courseId: string, classInfo: ClassType } = await request.json()
//     const course = await Course.findById(courseId)
//     const courseClass = await Class.create(classInfo)
//     course.classes.push(courseClass)
//     await course.save()
//     return NextResponse.json({ course, success: "New course created" })
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 })
//   }
// }


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
    return NextResponse.json({ error }, { status: 400 })
  }
}
