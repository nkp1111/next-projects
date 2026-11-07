import getMyProfile from "@/lib/getMyProfile";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CommandLineIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const profile = await getMyProfile();
  const { images, summary } = profile;

  const coreSkills = [
    "Node.js",
    "TypeScript",
    "Express.js",
    "PostgreSQL",
    "Drizzle ORM",
    "MongoDB ($geoNear)",
    "Redis",
    "BullMQ",
    "Docker",
    "Stripe",
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 flex flex-col justify-center min-h-[calc(100vh-80px)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Intro & Highlights */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide w-fit mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            Available for Backend Developer Roles
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-base-content leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Neeraj Parmar
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-base-content/80">
            Backend-focused Node.js Developer with 3.5+ Years of Experience
          </p>

          <p className="mt-4 text-base text-base-content/70 leading-relaxed max-w-xl">
            {summary}
          </p>

          {/* Quick Core Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase font-semibold text-base-content/50 mr-1 flex items-center gap-1">
              <CommandLineIcon className="w-3.5 h-3.5" /> Stack:
            </span>
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-base-200 text-base-content/90 border border-base-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link
              href="/projects"
              className="btn btn-primary px-5 font-semibold text-sm shadow-md shadow-primary/20 hover:shadow-lg transition-all"
            >
              Featured Projects
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </Link>

            <Link
              href="/experience"
              className="btn btn-outline btn-secondary px-5 font-medium text-sm"
            >
              <BriefcaseIcon className="w-4 h-4 mr-1" />
              Work Experience
            </Link>

            <Link
              href="/contact"
              className="btn btn-ghost px-4 text-sm text-base-content/80 hover:text-base-content"
            >
              Get in Touch
            </Link>
          </div>

          {/* Key Stats Bar */}
          <div className="mt-12 pt-8 border-t border-base-200 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary">
                3.5+
              </div>
              <div className="text-xs font-medium text-base-content/60 mt-0.5">
                Years Experience
              </div>
            </div>
            {/* <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary">10+</div>
              <div className="text-xs font-medium text-base-content/60 mt-0.5">Production Deployments</div>
            </div> */}
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary">
                100%
              </div>
              <div className="text-xs font-medium text-base-content/60 mt-0.5">
                Backend Focus
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-base-200/80 shadow-2xl bg-base-200">
              {images && images.length > 0 && (
                <Image
                  src={images[0]}
                  alt="Neeraj Parmar"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-4 -right-4 bg-base-100/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-base-200 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-success"></span>
              <span className="text-xs font-semibold text-base-content">
                Ahmedabad, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
