"use client";

import React, { useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import { ProjectParam } from '@/types'
import { ITEM_PER_PAGE } from '@/constant';
import debounce from '@/lib/debounce';
import ManualPagination from './manualPagination';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function ProjectPagination(
  { filteredProjects, filterQuery }
    : { filteredProjects: ProjectParam[], filterQuery: string }
) {
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredProjects.length / ITEM_PER_PAGE) || 1;
  const itemOffset = (currentPage - 1) * ITEM_PER_PAGE;
  const [currentProjects, setCurrentProjects] = useState(filteredProjects.slice(itemOffset, itemOffset + ITEM_PER_PAGE));

  // reset to page 1 on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterQuery]);

  useEffect(() => {
    debounce(() => {
      const offset = (currentPage - 1) * ITEM_PER_PAGE;
      setCurrentProjects(filteredProjects.slice(offset, offset + ITEM_PER_PAGE));
    }, 150)();
  }, [currentPage, filteredProjects]);

  if (filteredProjects.length === 0) {
    return (
      <div className="card bg-base-100 border border-base-200 p-12 text-center rounded-2xl my-8">
        <SparklesIcon className="w-12 h-12 text-base-content/30 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-base-content">No projects match your filter</h3>
        <p className="text-xs text-base-content/60 mt-1">
          Try searching for keywords like &quot;Node.js&quot;, &quot;Web3&quot;, &quot;PostgreSQL&quot;, or &quot;MongoDB&quot;.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Pagination */}
      {filteredProjects.length > ITEM_PER_PAGE && pageCount > 1 && (
        <div className="flex justify-center pt-4">
          <ManualPagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            maxPage={pageCount}
          />
        </div>
      )}

    </div>
  );
}
