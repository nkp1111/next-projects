import { NextRequest, NextResponse } from 'next/server'

let dbConnect = false;

export default async function middleware(request: NextRequest) {
  const splitUrl = request.url.split("/");
  const baseUrl = splitUrl[0] + "//" + splitUrl[2]
  const mongoDBConnectUrl = baseUrl + "/api/dbconnect";
  console.log(mongoDBConnectUrl)
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
