"use client";

import { ProjectParam } from '@/types'
import React, { useEffect, useState } from 'react'
import getTopFilterParams from '@/lib/getTopFilterParams';
import debounce from '@/lib/debounce';
import { DEBOUNCE_DELAY } from '@/constant';
import dynamic from 'next/dynamic';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const ProjectPagination = dynamic(() => import("./projectPagination"), { ssr: false });

export default function ProjectHolder({ projects }: { projects: ProjectParam[] }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const topFilterParams: string[] = getTopFilterParams({ projects });

  useEffect(() => {
    const handleProjectFilter = () => {
      const query = filterQuery.toLowerCase();
      const projectFiltered = projects.filter(project => {
        const pTags = project.tags.map(t => t.toLowerCase());
        const pTech = project.technologies.map(t => t.toLowerCase());
        const pName = project.name.toLowerCase();
        const pDesc = project.description.toLowerCase();
        
        return (
          pTags.some(t => t.includes(query)) ||
          pTech.some(t => t.includes(query)) ||
          pName.includes(query) ||
          pDesc.includes(query)
        );
      });

      setFilteredProjects(projectFiltered);
    };

    if (!filterQuery || filterQuery === "all") {
      debounce(() => setFilteredProjects(projects), DEBOUNCE_DELAY)();
    } else {
      debounce(handleProjectFilter, DEBOUNCE_DELAY)();
    }
  }, [filterQuery, projects]);

  return (
    <div className="flex flex-col gap-8">
      
      {/* Controls Bar: Category Pills + Search Box */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-base-100 border border-base-200 shadow-sm">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 items-center justify-center sm:justify-start w-full md:w-auto">
          {topFilterParams.slice(0, 7).map((item, ind) => {
            const isSelected = filterQuery === item.toLowerCase() || (filterQuery === "" && item === "all");
            return (
              <button
                key={ind}
                onClick={() => setFilterQuery(item === "all" ? "" : item.toLowerCase())}
                className={`btn btn-xs sm:btn-sm rounded-lg capitalize transition-all ${
                  isSelected
                    ? "btn-primary font-semibold shadow-sm"
                    : "btn-ghost text-base-content/70 hover:bg-base-200"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={filterQuery}
            placeholder="Search stack, title..."
            className="input input-sm input-bordered w-full pl-9 pr-3 rounded-lg text-xs bg-base-200/50 focus:bg-base-100 transition-colors"
            onChange={(e) => setFilterQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="w-4 h-4 text-base-content/50 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

      </div>

      {/* Projects Grid / Pagination */}
      <ProjectPagination
        filteredProjects={filteredProjects}
        filterQuery={filterQuery}
      />
    </div>
  );
}
