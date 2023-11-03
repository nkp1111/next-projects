import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row items-center  p-24">
      <div className="flex flex-col justify-center  flex-1">
        <h1 className="text-lg">Hello, I am <br></br> <span className="font-bold text-6xl">Neeraj Parmar</span></h1>
        <p className="mt-10">
          I am a
          <span className="badge badge-ghost text-lg badge-info text-bold mx-2">Web Developer</span>
          that&apos;s passionate about learning new technologies.
        </p>
        <div className="mt-4 flex gap-4">
          <Link href={"/skills"} className="btn btn-success flex flex-row font-normal" role="button">
            Check out my <span className="font-semibold">Skills</span>
            <ArrowRightIcon className="w-8 h-8 p-0" />
          </Link>
          <Link href={"/projects"} className="btn btn-success flex flex-row font-normal" role="button">
            Check out my <span className="font-semibold">Projects</span>
            <ArrowRightIcon className="w-8 h-8 p-0" />
          </Link>
        </div>
      </div>
      <div className="flex-1"></div>
    </main>
  )
}
