import { NextRequest, NextResponse } from "next/server";
import Student from "@/models/students";
import { StudentType } from "@/types"
import { sendAuthToken } from "@/lib/auth/authToken";
import { connectMongo, disconnectMongo } from "@/lib/general/mongoDB";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, photo, bio }: StudentType = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 })
    }

    // TODO: upload image to cloudinary and save img link


    // establish mongo connection
    const { success, error, client } = await connectMongo();
    if (error || !client) {
      return NextResponse.json({ error }, { status: 500 })
    } else {
      console.log("client success", success, client)
    }
    const student = await Student.create({ name, email, password, photo, bio })

    // disconnect mongo db connection
    const { error: disconnectError } = await disconnectMongo(client);
    if (disconnectError) {
      console.log("Error while disconnecting mongo `Login api route`")
    }

    const successMessage = "Student registered successfully"
    return sendAuthToken(student, successMessage);

  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
