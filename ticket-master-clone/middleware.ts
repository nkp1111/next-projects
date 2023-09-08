import { NextRequest, NextResponse } from 'next/server'

let dbConnect = false;

export default async function middleware(request: NextRequest) {
  const mongoDBConnectUrl = "http://localhost:3000/api/dbconnect";
  if (!dbConnect) {
    const res = await fetch(mongoDBConnectUrl);
    const data = await res.json();
    if (data.success) {
      console.log(data.success)
      dbConnect = true;
    } else {
      console.log(data.error);
    }
  }
  return NextResponse.next()
}
