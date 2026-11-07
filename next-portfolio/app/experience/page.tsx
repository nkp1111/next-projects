import getMyExperiences from '@/lib/getMyExperience';
import handleDate from '@/lib/handleDate';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  CalendarIcon, 
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import React from 'react'

export default async function Experience() {
  const { work_experience: experience } = await getMyExperiences();

  // Curated responsibilities mapping for richer presentation
  const experienceHighlights: Record<string, string[]> = {
    "Incipient Infotech": [
      "Architected backend microservices and asynchronous task pipelines using Node.js, Express, TypeScript, and BullMQ with Redis.",
      "Engineered ProjectWolf (projectwolf.com) multi-chain crypto token presale platform; integrated Alchemy, QuickNode, and Binance APIs with 15s TTL price caching.",
      "Designed PostgreSQL database schemas with Drizzle ORM ensuring compile-time type safety and atomic transaction records.",
      "Developed ShareThere (sharethere.com) location-based discovery feed using MongoDB $geoNear aggregation with 3-tier radial proximity metrics and Stripe Webhooks.",
      "Built server-side composite image synthesis pipeline for FaceWish (facewish.com) using Sharp and Node-Canvas.",
      "Containerized backend microservices using Docker for streamlined local development and CI/CD deployment."
    ],
    "QuadB Technologies": [
      "Developed core backend modules for OWR E-commerce (business.owr.app), a multi-vendor platform supporting independent storefronts and catalog management.",
      "Designed multi-tenant relational schemas using PostgreSQL and Sequelize ORM, integrating Redis caching to optimize high-traffic endpoints.",
      "Integrated logistics APIs (Shiprocket, Delhivery) for automated parcel dispatch, tracking, and MSG91 SMS notification gateways.",
      "Authored automated integration test suites using Mocha and Chai, enforcing strict request validation with Zod."
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">
          Work Experience
        </h1>
        <p className="mt-3 text-base text-base-content/70">
          3.5+ years of engineering experience delivering production-grade backend systems, distributed queues, and payment pipelines.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col gap-8">
        {experience.map((exp, ind) => {
          const isCurrent = exp.end_date === "Present";
          const highlights = experienceHighlights[exp.company] || [];

          return (
            <div 
              key={ind} 
              className={`card bg-base-100 border ${isCurrent ? 'border-primary/50 shadow-md shadow-primary/5' : 'border-base-200 shadow-sm'} p-6 sm:p-8 rounded-2xl transition-all`}
            >
              
              {/* Top Row: Title, Company, Badge, Dates */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-base-200">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-2xl font-bold text-base-content">{exp.company}</h2>
                    {isCurrent && (
                      <span className="badge badge-success badge-sm font-semibold text-xs text-white">
                        Current Role
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1.5 text-primary font-semibold text-base">
                    <BriefcaseIcon className="w-4 h-4" />
                    <span>{exp.position}</span>
                    <span className="text-base-content/40">•</span>
                    <span className="text-xs text-base-content/60 font-mono font-normal">{exp.language}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-base-content/70 gap-1.5 shrink-0">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CalendarIcon className="w-4 h-4 text-base-content/50" />
                    <span>{handleDate(exp.start_date)} — {handleDate(exp.end_date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="w-4 h-4 text-base-content/50" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights & Achievements */}
              {highlights.length > 0 && (
                <div className="py-6 border-b border-base-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/60 mb-3">
                    Key Technical Contributions
                  </h3>
                  <ul className="space-y-2.5">
                    {highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-base-content/85 leading-relaxed">
                        <CheckCircleIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects Worked On & Links */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/60 mb-2">
                    Delivered Projects
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.projects.map((proj) => (
                      <span key={proj} className="badge badge-outline badge-sm px-2.5 py-1 text-xs font-medium">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Company Links */}
                {exp.social && (
                  <div className="flex gap-2">
                    {Object.keys(exp.social).map((key) => (
                      <a
                        key={key}
                        href={exp.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-xs gap-1 capitalize text-base-content/70 hover:text-primary"
                      >
                        <span>{key}</span>
                        <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </main>
  );
}
