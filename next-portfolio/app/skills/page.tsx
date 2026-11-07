import getMySkills from '@/lib/getMySkills';
import { SkillParams } from '@/types';
import Image from 'next/image';
import React from 'react'

export default async function Skills() {
  const { skills }: { skills: SkillParams[] } = await getMySkills();

  // Categorization helpers
  const categories: { title: string; skills: string[]; description: string }[] = [
    {
      title: "Backend Frameworks & Core",
      description: "Server-side runtimes, asynchronous microservices, and API architecture",
      skills: ["Node.js", "TypeScript", "JavaScript", "Express.js", "Python"]
    },
    {
      title: "Databases, ORM & Caching",
      description: "Relational, document, and in-memory data storage systems",
      skills: ["PostgreSQL", "Drizzle ORM", "MongoDB", "Redis"]
    },
    {
      title: "Queues, DevOps & Tools",
      description: "Distributed task workers, containerization, and version control",
      skills: ["BullMQ", "Docker", "Git"]
    },
    {
      title: "Frontend & UI Engineering",
      description: "Responsive interfaces, server components, and modern styling",
      skills: ["React", "Next.js", "Tailwind CSS"]
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
          Skills & Technical Competencies
        </h1>
        <p className="mt-3 text-base text-base-content/70">
          Core backend tools, database engines, distributed queues, and architectural patterns I use to build scalable production software.
        </p>
      </div>

      {/* Categorized Skills Section */}
      <div className="space-y-12">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => 
            category.skills.some((name) => name.toLowerCase() === s.name.toLowerCase())
          );

          if (categorySkills.length === 0) return null;

          return (
            <div key={category.title} className="flex flex-col">
              
              {/* Category Header */}
              <div className="mb-5">
                <h2 className="text-xl font-bold text-base-content">{category.title}</h2>
                <p className="text-xs text-base-content/60 mt-0.5">{category.description}</p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill) => {
                  const percentage = Math.round(skill.level * 100);

                  return (
                    <div 
                      key={skill.name}
                      className="card bg-base-100 border border-base-200 shadow-sm hover:border-primary/40 hover:shadow-md transition-all p-5 rounded-2xl flex flex-col justify-between"
                    >
                      <div>
                        {/* Icon + Title */}
                        <div className="flex items-center gap-3.5 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-base-200/80 border border-base-300 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                            {skill.image ? (
                              <Image
                                src={skill.image}
                                alt={skill.name}
                                width={36}
                                height={36}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <span className="font-bold text-xs text-primary">{skill.name.slice(0, 2)}</span>
                            )}
                          </div>
                          
                          <div>
                            <h3 className="font-bold text-base text-base-content">{skill.name}</h3>
                            <span className="text-xs font-semibold text-primary">{percentage}% Proficiency</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-base-content/70 leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-base-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-primary h-1.5 rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

    </main>
  );
}
