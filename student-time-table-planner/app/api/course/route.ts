import Class from '@/models/classes'
import Course from '@/models/courses'
import { ClassType, CourseType } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const courses: CourseType[] = await Course.find()
    return NextResponse.json({ courses, success: "All courses fetched" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, teacher, classes }: CourseType = await request.json()
    const allClasses: ClassType[] = [];
    for (let classD of classes) {
      const newClass = await Class.create(classD)
      allClasses.push(newClass);
    }

    const course = await Course.create({ title, teacher, classes: allClasses })
    return NextResponse.json({ course, success: "New course created" })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}



