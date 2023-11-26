import { formatDistanceStrict } from "date-fns"

export default function formatDateDistance(date: string | number | Date) {
  const newDate = new Date(date);
  return formatDistanceStrict(newDate, Date.now());
}
