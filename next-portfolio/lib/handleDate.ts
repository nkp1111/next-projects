import { format } from "date-fns"

// format date string of 2023-01-05 to 05 Jan 2023
export default function handleDate(date: string) {
  if (date === "Present") return date;
  const properDate = new Date(date);
  return format(properDate, "dd MMM yyyy");
}
