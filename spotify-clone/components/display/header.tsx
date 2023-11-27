import { displayNav } from '@/constant/displayNav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaSortDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import HeaderNav from './headerNav';

export default function DisplayHeader() {
  return (
    <div className='flex justify-between gap-3 items-center flex-wrap'>
      <div className="flex gap-3 items-center">
        <HeaderNav />
      </div>

      <div className="flex gap-5 items-center">
        <button type="button"
          className='btn border border-white btn-sm px-10'>
          Upgrade
        </button>

        <details className="dropdown">
          <summary className="m-1 btn btn-sm flex items-center py-0 normal-case ps-0 flex-nowrap">
            <span>
              <Image
                src={"https://gravatar.com/avatar"}
                alt={"avatar"}
                width={40}
                height={40}
                className='image-full object-cover w-7 h-7 rounded-full'
              />
            </span>
            <span> Developer</span>
            <span className='-mt-2'><FaSortDown /></span>
          </summary>
          <ul className="p-1 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-60 right-16">
            {/* navbar  */}
            <nav className='navbar items-start flex-col'>
              {displayNav.map(navItem => (
                <div key={navItem.id} className={`btn btn-ghost rounded-sm w-full justify-start items-center relative py-0
                ${navItem.id === displayNav.length && "mt-3"}
                 ${!navItem.active && "cursor-not-allowed"}`}>
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
    </div>
  )
}
