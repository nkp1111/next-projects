import { startDatabaseConnection } from "@/lib/dbConfig"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const connect = await startDatabaseConnection();
  if (connect) {
    return NextResponse.json({ success: true, message: "Postgres DB Connected" });
  }
  return NextResponse.json({ success: false, error: "Postgres DB not connected" }, { status: 500 });
}
