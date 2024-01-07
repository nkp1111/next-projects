export default async function getEndTime() {
  "use server";
  const endTime = process.env.LIMITED_DEAL_END_DATE
  return endTime ? new Date(endTime) : new Date(0);
}
