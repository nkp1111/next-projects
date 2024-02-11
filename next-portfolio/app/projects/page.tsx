import getMyProjects from '@/lib/getMyProjects'
import { ProjectParam } from '@/types';
import React from 'react'
import PortfolioProjectBanner from '@/components/projects/portfolioProjectBanner';
import ProjectHolder from '@/components/projects/projectHolder';

const getTime = (dateString: string) => new Date(dateString).getTime();

export default async function Projects() {
  const data: { projects: ProjectParam[] } = await getMyProjects();
  if (!data) return;
  const { projects } = data;
  // all projects 
  const projectSortedByDate = projects.sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt))
  // .filter(project => project.id !== 15);

  // this portfolio project
  const portfolioProject = projects.find(project => project.id === 15);

  return (
    <main className="p-4 w-full h-full">
      <h1 className="text-4xl font-bold sm:mt-8 mt-4 w-full text-center">Projects</h1>

      <div className='mt-5'>
        {/* {portfolioProject && <PortfolioProjectBanner portfolioProject={portfolioProject} />} */}

        <ProjectHolder projects={projectSortedByDate} />
      </div>
    </main>
  )
}
