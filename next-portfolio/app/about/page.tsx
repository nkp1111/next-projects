import InfoAboutMe from '@/components/infoAboutMe';
import getMyProfile from '@/lib/getMyProfile';
import { PersonalInfoParams } from '@/types';
import Image from 'next/image';
import React from 'react'

export default async function About() {
  const profile: PersonalInfoParams = await getMyProfile();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
          About Me
        </h1>
        <p className="mt-3 text-base text-base-content/70">
          A dedicated backend engineer focused on building robust APIs, scalable databases, and high-concurrency systems.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile Card / Image on the left */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="w-full card bg-base-100 border border-base-200 shadow-sm p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-base-300 shadow-md mb-4 bg-base-200">
              {profile?.images?.[0] && (
                <Image
                  src={profile.images[0]}
                  alt={profile.name}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              )}
            </div>
            
            <h2 className="text-xl font-bold text-base-content">{profile.name}</h2>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Node.js / Backend Developer</p>
            <p className="text-xs text-base-content/60 mt-1">{profile.location}</p>

            {profile.resume && (
              <div className="mt-5 pt-4 border-t border-base-200 w-full flex flex-col gap-2">
                <a 
                  href={profile.resume} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-full font-medium"
                >
                  View Full Resume
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Info Details on the right */}
        <div className="lg:col-span-8">
          <InfoAboutMe profile={profile} />
        </div>

      </div>
    </main>
  );
}
