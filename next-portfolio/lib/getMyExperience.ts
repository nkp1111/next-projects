import { URLS } from "@/constant";
import fetchRequest from "./fetchRequest";

export default async function getMyExperiences() {
  let { experienceUrl } = URLS;
  const data = await fetchRequest({ url: experienceUrl })
  return data;
}
