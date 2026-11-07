"use client";

import { ProjectParam } from '@/types'
import Image from 'next/image';
import React from 'react'
import GithubIcon from '../githubIcon';
import handleDate from '@/lib/handleDate';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function ProjectCard({ project }: { project: ProjectParam }) {
  const { 
    name, 
    description, 
    image, 
    links: { github, live_site }, 
    createdAt, 
    technologies, 
    features 
  } = project;

  const hasLiveSite = live_site && live_site.length > 0 && Boolean(live_site[0]);
  const hasGithub = Boolean(github && github.trim() !== "");
  const fallbackImage = `https://dummyimage.com/600x400/0f172a/38bdf8.png&text=${encodeURIComponent(name)}`;
  const displayImage = image && image.length > 0 && image[0] ? image[0] : fallbackImage;

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group">
      
      {/* Thumbnail Banner */}
      <div className="relative h-48 sm:h-52 w-full bg-base-200 overflow-hidden">
        <Image
          src={displayImage}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Live Indicator Badge */}
        {hasLiveSite && (
          <div className="absolute top-3 right-3 bg-base-100/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-success border border-success/30 flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span>Live Site</span>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h2 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
              {name}
            </h2>
            <span className="text-xs font-medium text-base-content/50 shrink-0">
              {handleDate(createdAt)}
            </span>
          </div>

          <p className="text-sm text-base-content/75 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Key Technologies Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {technologies.slice(0, 5).map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-0.5 rounded-md text-xs font-medium bg-base-200 text-base-content/80 border border-base-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-medium text-base-content/50">
                +{technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-base-200 flex items-center justify-between gap-2">
          {hasLiveSite ? (
            <a
              href={live_site[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex-1 font-semibold text-xs gap-1.5"
            >
              <span>Visit Live</span>
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-base-content/40 italic py-1 px-2">
              Production internal
            </span>
          )}

          {hasGithub && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm gap-1.5 text-xs font-medium"
              title="View Source on GitHub"
            >
              <GithubIcon />
              <span>Code</span>
            </a>
          )}
        </div>

      </div>

    </div>
  );
}
