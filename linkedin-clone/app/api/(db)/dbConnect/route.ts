import { startDatabaseConnection } from "@/lib/db/dbConfig"
import { NextRequest, NextResponse } from "next/server";
import dbAssociation from "@/lib/db/dbAssociation";
import { sequelize } from "@/lib/db/dbConfig"

export async function POST(request: NextRequest) {
  const connect = await startDatabaseConnection();
  if (connect) {
    dbAssociation();
    await sequelize.sync({ alter: true });
    return NextResponse.json({ success: "Postgres DB Connected" });
  }
  return NextResponse.json({ error: "Postgres DB not connected" }, { status: 500 });
}