import getMyExperiences from '@/lib/getMyExperience';
import handleDate from '@/lib/handleDate';
import { ExperienceParams } from '@/types';
import { GlobeAltIcon } from '@heroicons/react/20/solid';
import React from 'react'

export default async function Experience() {
  const { work_experience: experience }: { work_experience: ExperienceParams[] } = await getMyExperiences();

  return (
    <main className="p-4 w-full h-full">
      <h1 className="text-4xl font-bold sm:mt-10 mt-4 w-full text-center">Work Experience</h1>
      <div className='mt-6 lg:w-3/4 w-full mx-auto flex flex-wrap gap-5'>
        <div className="grid grid-cols-12 gap-4 mx-auto">
          {/* experience card  */}
          {experience.map((exp, ind) => (
            <div key={ind} className='sm:col-span-6 lg:col-span-4 col-span-12'>
              <div className={`card bg-base-100 shadow-xl ${exp.end_date === "Present" && "bg-base-200"}`}>
                <div className="card-body">
                  <h2 className={`card-title`}>{exp.company}</h2>
                  <div>
                    <p className='badge badge-outline'>{exp.position}</p>
                  </div>
                  <p className='text-sm'><span className='font-bold'>Location: </span>{exp.location}</p>
                  <p><span className='font-bold'>Duration: </span> <span className=''>{handleDate(exp.start_date)}</span> - <span className={`${exp.end_date === "Present" && "text-success font-bold"}`}>{handleDate(exp.end_date)}</span> </p>

                  <hr className='my-2 border-primary' />
                  <div className='flex justify-center content-center gap-2 flex-wrap'>
                    {Object.keys(exp.social).map(key => (
                      <a key={key}
                        href={exp.social[key]} target='_blank'
                        title={exp.social[key]}
                        className='btn btn-success flex flex-row flex-nowrap flex-1'>
                        {key}
                        <GlobeAltIcon className='w-[20px] h-[20px]' />
                      </a>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
