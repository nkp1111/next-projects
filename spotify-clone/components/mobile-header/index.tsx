import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { displayNav } from '@/constant/displayNav';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaSortDown } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export default async function MobileHeader() {
  const session = await getServerSession(authOptions);
  return (
    <header className='fixed top-0 h-16 w-full left-0 flex justify-between items-center px-3 z-50 bg-black'>
      <div className='flex gap-2 items-center'>
        {["All", "Music", "Podcasts"].map(item => (
          <span key={item} className={`p-2 rounded-full px-4 cursor-pointer ${item === "All" ? "bg-primary text-black" : "bg-slate-700"}`}>{item}</span>
        ))}
      </div>

      <div className='h-full items-center flex'>
        <details className="dropdown">
          <summary className="m-1 btn btn-sm flex items-center py-0 normal-case ps-0 flex-nowrap">
            <span>
              <Image
                src={session?.user?.image || "https://gravatar.com/avatar"}
                alt={session?.user?.name + "-avatar"}
                width={40}
                height={40}
                className='image-full object-cover w-7 h-7 rounded-full'
              />
            </span>
            <span> {session?.user?.name || "Developer"}</span>
            <span className='-mt-2'><FaSortDown /></span>
          </summary>
          <ul className="p-1 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-60 right-16">
            {/* navbar  */}
            <nav className='navbar items-start flex-col'>
              {displayNav.map(navItem => (
                <div key={navItem.id}
                  className={`btn btn-ghost rounded-sm w-full justify-start items-center relative py-0 ${navItem.id === displayNav.length && "mt-3"} ${!navItem.active && "cursor-not-allowed"}`}
                >
                  <hr className={navItem.id === displayNav.length ? "block absolute border-red-50 border-t top-0 left-0 w-full h-1" : "hidden"} />
                  {/* <div className="">
                    <navItem.icon />
                  </div> */}
                  <Link
                    href={navItem.link}
                    className={`normal-case font-normal  ${!navItem.active && "cursor-not-allowed"}`}>
                    {navItem.title}
                  </Link>

                  <div className={[1, 3].includes(navItem.id) ? "block ms-auto" : "hidden"}>
                    <FiExternalLink className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </nav>
          </ul>
        </details>
      </div>
    </header>
  )
}
