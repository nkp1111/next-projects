import getMyProjects from '@/lib/getMyProjects'
import { ProjectParam } from '@/types';
import React from 'react'
import ProjectHolder from '@/components/projects/projectHolder';

const getTime = (dateString: string) => new Date(dateString).getTime();

export default async function Projects() {
  const { projects }: { projects: ProjectParam[] } = await getMyProjects();
  
  // Sort projects so the latest and most relevant production projects appear first
  const sortedProjects = [...projects].sort((a, b) => getTime(b.createdAt) - getTime(a.createdAt));

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
          Featured Projects
        </h1>
        <p className="mt-3 text-base text-base-content/70">
          A curated portfolio of production Web3 exchanges, location-aware community apps, SaaS platforms, and backend services.
        </p>
      </div>

      {/* Projects Holder */}
      <ProjectHolder projects={sortedProjects} />

    </main>
  );
}
