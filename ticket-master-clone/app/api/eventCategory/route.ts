import { NextRequest, NextResponse } from "next/server"

const url = 'https://app.ticketmaster.com/discovery/v2/classifications?countryCode=US&apikey=' + process.env.API_KEY;

export async function GET(request: NextRequest) {
  try {
    const res = await fetch(url)
    const data = await res.json();
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
