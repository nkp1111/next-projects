import { displayNav } from '@/constant/displayNav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function DisplayHeader() {
  return (
    <div className='flex justify-between gap-3 items-center'>
      <div className="flex gap-3 items-center">
        <button type="button"
          className='tooltip bg-black rounded-full p-2'
          data-tip="Back"
          aria-label='Back'>
          <BsChevronLeft className="w-4 h-4" />
        </button>

        <button type="button"
          className='tooltip bg-black rounded-full p-2'
          data-tip="Next"
          aria-label='Next'>
          <BsChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-5 items-center">
        <button type="button"
          className='btn border border-white btn-sm px-10'>
          Upgrade
        </button>

        <details className="dropdown">
          <summary className="m-1 btn btn-sm flex items-center py-0 normal-case ps-0">
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
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64 right-16">
            {/* navbar  */}
            <nav className='navbar items-start flex-col mt-3'>
              {displayNav.map(navItem => (
                <div key={navItem.id} className={`btn btn-ghost rounded-sm w-full justify-start items-center relative 
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

                  <div className={[1, 3].includes(navItem.id) ? "block ms-5" : "hidden"}>
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
