import getMySkills from '@/lib/getMySkills';
import { SkillParams } from '@/types';
import Image from 'next/image';
import React from 'react'


export default async function Skills() {
  const { skills }: { skills: SkillParams[] } = await getMySkills();
  return (
    <main className="p-4 w-full h-full">
      <h1 className="text-2xl font-bold sm:mt-12 mt-4 w-full text-center">Skills and Technologies</h1>
      <div className='mt-6 sm:w-3/4 w-full mx-auto flex flex-wrap gap-5'>
        {skills?.map(skill => {
          return (
            <div key={skill.name}
              className='flex flex-col justify-center items-center border-2 rounded-2xl border-primary p-4'>
              <div
                // title={skill.description}
                className='p-3'>
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className={`w-[50px] h-auto`}
                />
              </div>
              <p className='font-bold border-t-2 border-secondary'>{skill.name}</p>
            </div>
          )
        })}
      </div>

    </main>
  )
}
