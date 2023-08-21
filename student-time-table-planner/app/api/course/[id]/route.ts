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
    return NextResponse.json({ error }, { status: 500 })
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
//     return NextResponse.json({ error }, { status: 500 })
//   }
// }


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
        console.log(classD, typeof classD, "class")
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
