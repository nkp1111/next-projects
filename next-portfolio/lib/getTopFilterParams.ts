import { ProjectParam } from "@/types";

interface KeyStringValueNumber {
  [key: string]: number;
}

export default function getTopFilterParams(
  { projects }: { projects: ProjectParam[] }
): string[] {
  const allParams: KeyStringValueNumber = projects.reduce((acc: KeyStringValueNumber, project) => {
    project.tags.forEach(tag => {
      const formattedTag = tag.trim();
      if (!formattedTag) return;
      if (acc[formattedTag]) {
        acc[formattedTag] += 1;
      } else {
        acc[formattedTag] = 1;
      }
    });
    return acc;
  }, {});

  const sortedParams = Object.entries(allParams)
    .sort((a, b) => b[1] - a[1])
    .map(param => param[0]);

  sortedParams.unshift("all");

  return sortedParams;
}
