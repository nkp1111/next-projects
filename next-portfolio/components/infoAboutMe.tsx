import { PersonalInfoParams } from '@/types'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LanguageIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react'

export default function InfoAboutMe({ profile }: { profile: PersonalInfoParams }) {
  const { name, email, phone, location, language, social, summary } = profile;

  return (
    <div className="flex flex-col gap-6">
      
      {/* Bio / Summary Card */}
      <div className="card bg-base-100 border border-base-200 shadow-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-base-content mb-3">Professional Background</h2>
        <p className="text-base-content/80 leading-relaxed text-sm sm:text-base">
          {summary}
        </p>
      </div>

      {/* Contact & Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Email */}
        <div className="p-4 rounded-xl bg-base-100 border border-base-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <EnvelopeIcon className="w-5 h-5" />
          </div>
          <div className="overflow-hidden">
            <div className="text-xs text-base-content/60 font-medium">Email</div>
            <a href={`mailto:${email}`} className="text-sm font-semibold text-base-content hover:text-primary truncate block transition-colors">
              {email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="p-4 rounded-xl bg-base-100 border border-base-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <PhoneIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-base-content/60 font-medium">Phone</div>
            <a href={`tel:${phone}`} className="text-sm font-semibold text-base-content hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="p-4 rounded-xl bg-base-100 border border-base-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <MapPinIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-base-content/60 font-medium">Location</div>
            <div className="text-sm font-semibold text-base-content">
              {location}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="p-4 rounded-xl bg-base-100 border border-base-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <LanguageIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-base-content/60 font-medium">Languages</div>
            <div className="text-sm font-semibold text-base-content flex gap-1 flex-wrap">
              {language.map((lang, idx) => (
                <span key={lang.name}>
                  {lang.name}
                  {idx < language.length - 1 && ","}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Social Links */}
      <div className="card bg-base-100 border border-base-200 shadow-sm p-6 rounded-2xl">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-base-content/60 mb-4">
          Connect Across Platforms
        </h3>
        <div className="flex flex-wrap gap-3">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm gap-2 capitalize font-medium hover:bg-primary hover:border-primary hover:text-primary-content transition-all"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={18}
                  height={18}
                  className="w-4 h-4 rounded-sm"
                />
              )}
              <span>{item.name}</span>
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 opacity-60" />
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
