import { URLS } from "@/constant";
import fetchRequest from "./fetchRequest";

export default async function getMyProfile() {
  let { profileUrl } = URLS;
  const data = await fetchRequest({ url: profileUrl })
  return data;
}
