import { NextRequest, NextResponse } from 'next/server';
import { SERVER_URL } from "@/constant"

let mongooseConnected = false;

export default async function middleware(request: NextRequest) {
  const mongoConfigUrl = SERVER_URL + "/api/config"
  if (!mongooseConnected) {
    const res = await fetch(mongoConfigUrl)
    const data = await res.json()
    if (data.success) {
      mongooseConnected = true;
      console.log(data.success);
    } else {
      console.log(data.error)
    }
  }
  NextResponse.next();
}
