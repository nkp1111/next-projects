import { URLS } from "@/constant";
import fetchRequest from "./fetchRequest";

export default async function getMyProjects() {
  let { projectUrl } = URLS;
  const data = await fetchRequest({ url: projectUrl })
  return data;
}
