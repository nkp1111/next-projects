import getJwtUser from "@/lib/getJwtUser";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // const currentUser = await getJwtUser(request);
    // console.log(currentUser);
    cookies().delete("token");
    return NextResponse.json({ success: "Successfully logout user" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
