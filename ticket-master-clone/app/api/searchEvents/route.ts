import { API_KEY, TICKET_MASTER_URL } from "@/constants";
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
  const { searchData, size } = await request.json();

  let url = TICKET_MASTER_URL + `events.json?stateCode=${searchData.location}&startDateTime=${String(searchData.date).split(".")[0] + "Z"}&apikey=${API_KEY}`;

  if (searchData.keyword) {
    url += `&keyword=${searchData.keyword}`;
  }
  if (size) {
    url += `&size=${size}`;
  }
  try {
    const res = await fetch(url, {
      next: { revalidate: 0 },
    })
    const data = await res.json();
    return NextResponse.json({ data, success: "Search event fetched" });
  } catch (error) {
    return NextResponse.json({ error })
  }
}
