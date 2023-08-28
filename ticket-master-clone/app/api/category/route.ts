import { API_KEY, TICKET_MASTER_URL } from "@/constants";
import { NextRequest, NextResponse } from "next/server"


const data: {
  [key: string]: string;
} = {
  location: "US"
}

export async function GET(request: NextRequest) {
  const requestUrl = request.url;
  const querys = requestUrl.split("?")[1].split("&");

  for (let i in querys) {
    const [key, value] = i.split("=");
    data[key] = value;
  }

  const url = TICKET_MASTER_URL + `classifications?countryCode=${data.location}&apikey=${API_KEY}`;
  try {
    const res = await fetch(url)
    const data = await res.json();
    return NextResponse.json({ data, success: "Categories fetched" })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
