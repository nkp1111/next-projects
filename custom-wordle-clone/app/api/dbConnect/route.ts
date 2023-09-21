import { startDatabaseConnection } from "@/lib/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import dbAssociation from "@/lib/dbAssociation";
import { sequelize } from "@/lib/dbConfig"

export async function POST(request: NextRequest) {
  const connect = await startDatabaseConnection();
  if (connect) {
    await dbAssociation();
    await sequelize.sync({ alter: true });
    return NextResponse.json({ success: true, message: "Postgres DB Connected" });
  }
  return NextResponse.json({ success: false, error: "Postgres DB not connected" }, { status: 500 });
}
