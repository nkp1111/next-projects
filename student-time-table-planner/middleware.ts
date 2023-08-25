import { NextRequest, NextResponse } from 'next/server';
import { SERVER_URL } from "@/constant"
import mongoose from 'mongoose';

let mongooseConnected = false;

export default async function middleware(request: NextRequest) {
  const mongoConfigUrl = SERVER_URL + "/api/config"
  if (!mongooseConnected) {
    const res = await fetch(mongoConfigUrl)
    const data = await res.json()
    if (data.success) {
      mongooseConnected = true;
      console.log(data.success);
      // Check the current connection state
      if (mongoose.connection.readyState === 1) {
        console.log('Mongoose is connected to the database.');
      } else {
        console.log('Mongoose is not currently connected to the database.');
      }
    } else {
      console.log(data.error)
    }
  }
  NextResponse.next();
}
