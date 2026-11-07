import projectData from "@/data/project.json";
import { ProjectParam } from "@/types";

export default async function getMyProjects(): Promise<{ projects: ProjectParam[] }> {
  return projectData as { projects: ProjectParam[] };
}
