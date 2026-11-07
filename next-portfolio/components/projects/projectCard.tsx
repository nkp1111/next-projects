"use client";

import { ProjectParam } from '@/types'
import Image from 'next/image';
import React from 'react'
import GithubIcon from '../githubIcon';
import handleDate from '@/lib/handleDate';
import { 
  ArrowTopRightOnSquareIcon, 
  CommandLineIcon, 
  ServerStackIcon 
} from '@heroicons/react/24/outline';

export default function ProjectCard({ project }: { project: ProjectParam }) {
  const { 
    name, 
    description, 
    image, 
    longImage,
    links: { github, live_site }, 
    createdAt, 
    technologies, 
  } = project;

  const hasLiveSite = live_site && live_site.length > 0 && Boolean(live_site[0]);
  const hasGithub = Boolean(github && github.trim() !== "");
  const shotImage = image && image.length > 0 ? image[0] : null;

  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:border-primary/50 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col justify-between group">
      
      {/* Thumbnail Banner with Hover Scroll Effect */}
      <div className="relative h-52 w-full bg-slate-950 overflow-hidden select-none">
        
        {longImage ? (
          /* Long Screenshot with Smooth Scroll on Hover */
          <div className="w-full h-full relative overflow-hidden">
            <div className="w-full absolute top-0 left-0 transition-transform duration-[2500ms] ease-in-out group-hover:duration-[12000ms] group-hover:-translate-y-[calc(100%-13rem)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={longImage}
                alt={name}
                className="w-full h-auto object-cover object-top"
                loading="lazy"
              />
            </div>
            
            {/* Scroll Hint Badge */}
            <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-slate-700/60 pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
              Hover to scroll ⤓
            </div>
          </div>
        ) : shotImage ? (
          /* Regular Shot Image */
          <div className="relative w-full h-full">
            <Image
              src={shotImage}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ) : (
          /* Default Backend Architecture & Service Mockup (No fake image) */
          <div className="w-full h-full p-5 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <ServerStackIcon className="w-3 h-3 text-primary" />
                backend.service
              </span>
            </div>

            {/* Terminal Center Display */}
            <div className="my-auto text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-2 shadow-inner">
                <CommandLineIcon className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-xs font-semibold text-slate-200">
                {name}
              </h3>
              <p className="text-[11px] font-mono text-slate-400 mt-1">
                REST API · Microservice Architecture
              </p>
            </div>

            {/* Terminal Status Footer */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active Engine
              </span>
              <span>{technologies[0] || 'Node.js'}</span>
            </div>
          </div>
        )}

        {/* Live Indicator Badge */}
        {hasLiveSite && (
          <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-md z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
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
            <span className="text-xs text-base-content/50 font-mono py-1">
              Internal Production Service
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
