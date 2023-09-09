import { COLLECTIONS } from '@/constant'
import getMongoDB from '@/lib/general/getMongoDB'
import Class from '@/models/classes'
import Course from '@/models/courses'
import { ClassType, CourseType } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const courses = await db.collection(COLLECTIONS.courses).find({}).toArray();
    return NextResponse.json({ courses, success: "All courses fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const { title, teacher, classes }: CourseType = await request.json()
    const allClasses = [];
    for (let classD of classes) {
      const insertResult = await db.collection(COLLECTIONS.classes).insertOne(classD as never);
      allClasses.push(insertResult.insertedId);
    }

    const course = { title, teacher, classes: allClasses }
    await db.collection(COLLECTIONS.courses).insertOne(course);

    return NextResponse.json({ course, success: "New course created" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}



