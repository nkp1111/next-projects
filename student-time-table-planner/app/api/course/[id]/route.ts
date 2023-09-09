import { COLLECTIONS } from '@/constant'
import getMongoDB from '@/lib/general/getMongoDB'
import Class from '@/models/classes'
import Course from '@/models/courses'
import { CourseType } from '@/types'
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

// get course details
export async function GET(
  request: NextRequest, { params: { id } }: { params: { id: string } }
) {
  try {
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const course = await db.collection(COLLECTIONS.courses).findOne({ _id: new ObjectId(id) });

    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 400 });

    const classIds = course.classes.map((classId: string) => new ObjectId(classId));
    course.classes = await db.collection(COLLECTIONS.classes).find({ _id: { $in: classIds } }).toArray();

    return NextResponse.json({ course, success: "Course details fetched" })
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
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const courseData: CourseType = await request.json()
    let course = await db.collection(COLLECTIONS.courses).findOne({ _id: new ObjectId(id) });
    let newCourseClasses = [];
    if (course) {
      // update class if _id present else create new class
      // TODO: updating course/class _id field should not be updated
      for (let classD of courseData.classes) {
        if (typeof classD !== "string") {
          if (classD._id) {
            let classId;
            try {
              classId = classD._id;
              delete classD._id;
              await db.collection(COLLECTIONS.classes).updateOne({ _id: new ObjectId(classD._id) }, { $set: classD });
            } catch (error) {
              console.log("error while updating class", error);
            }
            newCourseClasses.push(classId);
          } else {
            // console.log("class", classD)
            let insertResult = await db.collection(COLLECTIONS.classes).insertOne(classD as never);
            newCourseClasses.push(insertResult.insertedId);
          }
        }
      }

      courseData.classes = newCourseClasses as any;
      delete courseData._id;
      await db.collection(COLLECTIONS.courses).updateOne({ _id: new ObjectId(id) }, { $set: courseData });
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

    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const course = await db.collection(COLLECTIONS.courses).findOne({ _id: new ObjectId(id) })
    if (course) {
      const courseClassIds = course.classes.map((classId: string) => new ObjectId(classId));
      // delete all course classes
      await db.collection(COLLECTIONS.classes).deleteMany({ _id: { $in: courseClassIds } });
      // delete course
      await db.collection(COLLECTIONS.courses).deleteOne({ _id: new ObjectId(id) });
    }
    return NextResponse.json({ success: "Course deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
