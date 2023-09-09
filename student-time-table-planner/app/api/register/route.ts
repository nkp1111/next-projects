import { NextRequest, NextResponse } from "next/server";
import { StudentType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";
import { COLLECTIONS } from "@/constant";
import getMongoDB from "@/lib/general/getMongoDB";

export async function POST(request: NextRequest) {
  try {
    const { error, db } = await getMongoDB()
    if (error || !db) return NextResponse.json({ error }, { status: 400 })

    const { name, email, password, photo, bio }: StudentType = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 })
    }

    // TODO: upload image to cloudinary and save img link

    let studentExists = await db.collection(COLLECTIONS.students).findOne({ email });
    if (studentExists) return NextResponse.json({ error: "student already exists" }, { status: 400 });

    const student = await db.collection(COLLECTIONS.students).insertOne({ name, email, password, photo, bio }) as never as StudentType;

    const successMessage = "Student registered successfully"
    return sendAuthToken(student, successMessage);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
