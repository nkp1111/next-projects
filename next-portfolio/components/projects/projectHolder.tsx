"use client";

import { ProjectParam } from '@/types'
import React, { use, useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import getTopFilterParams from '@/lib/getTopFilterParams';
import debounce from '@/lib/debounce';
import { DEBOUNCE_DELAY } from '@/constant';


export default function ProjectHolder(
  { projects }: { projects: ProjectParam[] }
) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const topFilterParams: string[] = getTopFilterParams({ projects });

  useEffect(() => {
    const handleProjectFilter = () => {
      const projectFiltered = projects.filter(project => {
        const pTags = project.tags.map(t => t.toLowerCase());
        const pTech = project.technologies.map(t => t.toLowerCase());
        const pName = project.name.toLowerCase();
        const pDate = project.createdAt;
        if (pTags.includes(filterQuery)
          || pTech.includes(filterQuery)
          || pName.includes(filterQuery)
          || pDate.includes(filterQuery)) {
          return true;
        } else {
          return false;
        }
      })

      setFilteredProjects(() => projectFiltered);
    }

    if (!filterQuery || filterQuery === "all") {
      debounce(() => setFilteredProjects(() => projects), DEBOUNCE_DELAY)()
    } else {
      debounce(() => handleProjectFilter(), DEBOUNCE_DELAY)()
    }
  }, [filterQuery, projects]);

  return (
    <div className='mt-5'>
      {/* primary filters for project  */}
      <div className='mt-3 flex flex-wrap gap-2 justify-center'>
        {topFilterParams.slice(0, 8).map((item, ind) => (
          <div
            key={ind}
            onClick={() => setFilterQuery(item.toLowerCase())}
            className={`btn ${filterQuery === item && "btn-primary"} ${filterQuery === "" && item === "all" && "btn-primary"}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* input filter query */}
      <div className='flex justify-end mt-3'>
        <input
          type="text"
          title={"project filter query"}
          value={filterQuery}
          placeholder='filter query'
          className="input input-bordered input-success input-sm w-full max-w-xs"
          onChange={(e) => setFilterQuery(() => e.target.value)}
        />
      </div>

      <div className='grid grid-cols-12 gap-5 mt-8'>
        {filteredProjects.map(project => (
          <div key={project.id} className='col-span-12 md:col-span-6 lg:col-span-4 mx-auto'>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
