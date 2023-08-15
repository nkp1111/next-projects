import { NextRequest, NextResponse } from 'next/server';
import { SERVER_URL } from "@/constant"
let mongooseConnected = false;

export default function middleware(request: NextRequest) {
  const mongoConfigUrl = SERVER_URL + "/api/config"
  if (!mongooseConnected) {
    fetch(mongoConfigUrl)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          mongooseConnected = true;
          console.log(data.success);
        } else {
          console.log(data.error)
        }
      })
  }
  NextResponse.next();
}
