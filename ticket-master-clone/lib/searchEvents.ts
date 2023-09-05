import { searchBarType } from "@/types";
import { Dispatch, SetStateAction } from "react"

export default async function searchEvents(
  searchData: searchBarType,
  setSearchResult: Dispatch<SetStateAction<any[]>>,
  size?: number
) {
  const res = await fetch("/api/searchEvents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ searchData, size }),
  })

  const data = await res.json();
  if (data.error) {
    console.log(data.error)
  }
  console.log(data.success)
  setSearchResult(data.data?._embedded.events);
  return
}
