import InfoAboutMe from '@/components/infoAboutMe';
import getMyProfile from '@/lib/getMyProfile';
import { PersonalInfoParams } from '@/types';
import Image from 'next/image';
import React from 'react'

export default async function About() {
  const profile: PersonalInfoParams = await getMyProfile();

  return (
    <main className="p-4 w-full h-full">
      <h1 className="text-4xl font-bold sm:mt-10 mt-4 w-full text-center">About Me</h1>
      <div className='mt-6 lg:w-3/4 w-full mx-auto flex flex-wrap gap-5'>
        <div className="grid grid-cols-5 gap-4 mx-auto">
          <div className='sm:col-span-3 col-span-5 order-2 sm:order-1'>
            <InfoAboutMe profile={profile} />
          </div>
          <div className='sm:col-span-2 col-span-5 order-1 sm:order-2 flex justify-center'>
            <Image
              src={profile?.images[0]}
              alt={"profile"}
              width={400}
              height={400}
              className='object-contain mx-auto rounded-full sm:w-[400px] sm:h-[400px] h-[150px] w-[150px]'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
