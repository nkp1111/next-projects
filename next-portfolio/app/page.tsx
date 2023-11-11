import getMyProfile from "@/lib/getMyProfile";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  const { images, summary } = await getMyProfile();
  return (
    <main className="flex flex-col sm:flex-row p-4 ">
      <div className="flex flex-col flex-1 p-2 sm:px-10 md:px-20">
        <div className="sm:hidden block">
          {images && images.length > 0 && (
            <Image
              src={images[0]}
              alt={"profile"}
              height={200}
              width={500}
              className="w-[100px] h-[100px] rounded-full"
              priority
            />
          )}
        </div>

        <h1 className="text-lg sm:mt-16 mt-4">Hello, I am <br></br> <span className="font-bold text-6xl">Neeraj Parmar</span></h1>

        <p className="mt-10">
          I am a
          <span className="badge badge-ghost text-lg badge-info text-bold mx-2">Web Developer</span>
          that&apos;s passionate about learning new technologies.
        </p>

        <p className="my-5">{summary}</p>

        <div className="mt-4 flex lg:flex-row flex-col gap-4">
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
      <div className="flex-1 p-5 sm:block hidden">
        {images && images.length > 0 && (
          <Image
            src={images[0]}
            alt={"profile"}
            height={200}
            width={500}
            className="sm:w-[500px] sm:h-[500px] w-[100px] h-[100px] rounded-full object-contain"
          />
        )}
      </div>
    </main>
  )
}
