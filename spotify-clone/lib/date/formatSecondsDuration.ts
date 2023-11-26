import { format } from "date-fns"

// format seconds to hh:mm:ss format
// e.g. 120 -> 2:00
export default function formatSecondsDuration(seconds: number) {
  let formatter = seconds > 3600 ? "HH:mm:ss" : "mm:ss";
  return format(new Date(0, 0, 0, 0, 0, seconds), formatter);
}
