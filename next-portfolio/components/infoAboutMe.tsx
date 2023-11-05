import { PersonalInfoParams } from '@/types'
import { LinkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react'


export default function InfoAboutMe(
  { profile }: { profile: PersonalInfoParams }
) {

  const profileKeys = Object.keys(profile) as (keyof PersonalInfoParams)[];
  const socialLinks = profile["social"];

  return (
    <>
      {profileKeys.map((profileKey) => {
        if (["images", "social"].includes(profileKey)) {
          return null;
        }

        if (profileKey === "language") {
          return (
            <div key={profileKey}
              className='border-t-2 my-4 border-secondary flex pt-4'>
              <div className='capitalize text-lg'>{profileKey} Known:</div>
              <div className='text-xl ms-4'> {profile[profileKey].map(lang => lang.name).join(", ")}</div>
            </div>
          )
        }

        if (profileKey === "website") {
          return (
            <div key={profileKey}
              className='border-t-2 my-4 border-secondary flex pt-4'>
              <div className='capitalize text-lg'>{profileKey}:</div>
              <div className='text-xl ms-4'>
                <ol>
                  {profile[profileKey].map(site => {
                    if (!site) return;
                    return (
                      <li key={site}>
                        <a href={site} className='underline text-info flex'>
                          <span>{site}</span>
                          <LinkIcon className='w-[25px] h-[25px] ms-3' />
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          )
        }

        return (
          <div key={profileKey}
            className='grid grid-cols-5 sm:border-b-0 border-t-2 mb-3'>
            <div className='capitalize sm:col-span-1 col-span-5 text-lg'>{profileKey}: </div>
            <div className='text-xl sm:col-span-4 col-span-5 ms-2 sm:ms-0'> {profile[profileKey] as string}</div>
          </div>
        )
      })}

      <div className='border-y-2 my-4 border-secondary flex py-4 flex-col'>
        <div className='capitalize text-xl text-center font-semibold'>Social Links</div>
        <div className='flex gap-3 ms-4 flex-wrap justify-center'>
          {socialLinks.map(social => {
            const { name, link, icon } = social;
            return (
              <a key={name}
                href={link}
                title={link}
                target='_blank'
                className='btn flex-1 flex flex-nowrap gap-1'
              >
                {icon && (
                  <Image
                    src={icon}
                    alt="logo"
                    width={40}
                    height={40}
                    className={"w-[25px] h-[25px] "}
                  />
                )}
                <span>{name}</span></a>
            )
          })}
        </div>
      </div>
    </>
  )
}
