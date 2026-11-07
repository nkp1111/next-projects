import skillsData from "@/data/skills.json";
import { SkillParams } from "@/types";

export default async function getMySkills(): Promise<{ skills: SkillParams[] }> {
  return skillsData as { skills: SkillParams[] };
}
