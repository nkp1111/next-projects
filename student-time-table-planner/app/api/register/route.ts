import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/students";
import { StudentType } from "@/types"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, photo, bio }: StudentType = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 })
    }

    const student = await Student.create({ name, email, password, photo, bio })

    return NextResponse.json({ success: "Student registered successfully", student })

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
