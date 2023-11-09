"use client";

import { ProjectParam } from '@/types'
import React, { use, useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import getTopFilterParams from '@/lib/getTopFilterParams';


export default function ProjectHolder(
  { projects }: { projects: ProjectParam[] }
) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterQuery, setFilterQuery] = useState<string>("");
  const topFilterParams: string[] = getTopFilterParams({ projects });

  useEffect(() => {
    const handleProjectFilter = () => {
      console.log(filterQuery)
      console.log(projects);
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
      <div className='flex justify-end'>

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
