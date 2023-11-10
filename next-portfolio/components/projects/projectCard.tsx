import { ProjectParam } from '@/types'
import Image from 'next/image';
import React, { useState } from 'react'
import GithubIcon from '../githubIcon';
import handleDate from '@/lib/handleDate';
import { EyeIcon } from '@heroicons/react/20/solid';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function ProjectCard(
  { project }: { project: ProjectParam }
) {
  const { name, description, image, links: { github, live_site }, createdAt, technologies, features } = project;
  let dummyImage = "https://dummyimage.com/600x400/000/fff.jpg&text=No+image";
  let projectImage = image && image.length > 0 ? image[0] : dummyImage;
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card md:w-80 w-full h-full card-normal bg-base-100 shadow-xl">
      <figure className='h-52 relative shadow-sm'>
        <Image
          src={projectImage}
          alt={name}
          width={600}
          height={400}
          className='object-top absolute top-0 object-contain w-full'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p>
          {description.length > 100
            ? !showMore
              ? description.slice(0, 95) + "... "
              : description
            : description}

          {description.length > 100 && (
            <span onClick={(e) => setShowMore((pre) => !pre)}
              title={!showMore ? "Show" : "Hide"}
              className='inline-block bg-base-300 cursor-pointer ms-2'>
              {!showMore ? (
                <PlusIcon className='w-5 h-5' />
              ) : (
                <MinusIcon className='w-5 h-5' />
              )}
            </span>
          )}
        </p>

        <p><span className='font-semibold'>Created At:</span> {handleDate(createdAt)}</p>

        <div className='border-t-2 border-secondary'>
          <h3 className='font-semibold my-2'>Project Links:</h3>
          <div className='card-actions justify-between gap-2'>
            <a
              href={github} target='_blank'
              className="btn hover:btn-primary" title={"Github code"}>
              <GithubIcon />
            </a>

            <a
              href={live_site[0] || "#"} target='_blank'
              className={`btn hover:btn-primary ${live_site.length === 0 && "pointer-events-none cursor-not-allowed"}`} title={"Live site"}>
              <EyeIcon className='w-10 h-10' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
