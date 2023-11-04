import { URLS } from "@/constant";
import fetchRequest from "./fetchRequest";

export default async function getMySkills() {
  let { skillsUrl } = URLS;
  const data = await fetchRequest({ url: skillsUrl })
  return data;
}
