import { API_KEY, TICKET_MASTER_URL } from "@/constants";
import { NextRequest, NextResponse } from "next/server"


const data: {
  [key: string]: string;
} = {
  location: "US",
  eventId: "k7vGFKzleBdwS",
}

export async function POST(request: NextRequest) {
  const requestUrl = request.url;
  const querys = requestUrl.split("?")[1].split("&");

  for (let i of querys) {
    const [key, value] = i.split("=");
    data[key] = value;
  }

  let url = TICKET_MASTER_URL + `events.json?countryCode=${data.location}&classificationCode=${data.eventId}&apikey=${API_KEY}`;

  try {
    const res = await fetch(url)
    const data = await res.json();
    data.typeId = "";
    return NextResponse.json({ data, success: "Event details fetched" });
  } catch (error) {
    data.typeId = "";
    return NextResponse.json({ error })
  }
}
