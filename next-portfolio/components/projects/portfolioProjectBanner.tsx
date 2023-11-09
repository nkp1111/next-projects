import React from 'react'
import portfolioImage from "@/public/screencapture-localhost-3000-2023-11-06-18_23_24.png"
import Image from 'next/image'
import GithubIcon from '../githubIcon'
import { ProjectParam } from '@/types'

export default function PortfolioProjectBanner(
  { portfolioProject }: { portfolioProject: ProjectParam }
) {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={portfolioImage}
          alt={"portfolio project"}
          width={500}
          height={500}
          className="md:max-w-xl w-auto rounded-lg shadow-2xl"
        />
        <div className='container'>
          <h2 className="md:text-5xl text-3xl font-bold">{portfolioProject.name}</h2>
          <p className="md:py-6">{portfolioProject.description}</p>

          <a role="button"
            href={portfolioProject.links.github}
            title={portfolioProject.links.github}
            target="_blank"
            className='hover:bg-primary btn'>
            <GithubIcon className='' />
            <span>Github</span>
          </a>
        </div>

      </div>
    </div>
  )
}
