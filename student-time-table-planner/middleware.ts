import { NextRequest, NextResponse } from 'next/server';

let mongooseConnected = false;

export default function middleware(request: NextRequest) {
  const serverUrl = process.env.SERVER_URL || "http://localhost:3000";
  const mongoConfigUrl = serverUrl + "/api/config"
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
