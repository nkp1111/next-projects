import { ProjectParam } from "@/types";


interface KeyStringValueNumber {
  [key: string]: number;
}

export default function getTopFilterParams(
  { projects }: { projects: ProjectParam[] }
): string[] {

  const allParams: KeyStringValueNumber = projects.reduce((acc: KeyStringValueNumber, project) => {
    const allKeys = Object.keys(acc);
    project.tags.forEach(tag => {
      const lowerTag = tag.toLowerCase();
      if (allKeys.includes(tag)) {
        acc[tag] += 1;
      } else {
        acc[tag] = 1;
      }
    })
    return acc;
  }, { "frontend": 0 })

  let sortedParams = Object.entries(allParams).sort((a, b) => b[1] - a[1]).map(param => param[0]);
  sortedParams.unshift("all");

  return sortedParams;
}
