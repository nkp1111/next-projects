import { ProjectParam } from '@/types'
import Image from 'next/image';
import React from 'react'

export default function ProjectCard(
  { project }: { project: ProjectParam }
) {
  const { name, image, links: { github, live_site }, createdAt } = project;
  let dummyImage = "https://dummyimage.com/600x400/000/fff.jpg&text=No+image";
  let projectImage = image && image.length > 0 ? image[0] : dummyImage;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
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
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
