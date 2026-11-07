import experienceData from "@/data/experience.json";
import { ExperienceParams } from "@/types";

export default async function getMyExperiences(): Promise<{ work_experience: ExperienceParams[] }> {
  return experienceData as { work_experience: ExperienceParams[] };
}
