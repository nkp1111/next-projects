import React from 'react'
import Logo from '../general/logo'
import { sidebarNav } from '@/constant/sidebarNav'
import Link from 'next/link'
import { BsArrowDownCircle } from "react-icons/bs";
import getAllPlaylist from '@/lib/getAllPlaylist';

export default async function Sidebar() {
  const playlists = await getAllPlaylist();
  return (
    <section className="w-80 bg-black h-full relative flex flex-col">
      <h2 className="absolute text-center w-full invisible -top-96">Sidebar Navigation</h2>
      <div className='flex flex-col w-full h-full'>
        <div className='flex-1 p-2'>
          {/* spotify logo  */}
          <div className='p-4'>
            <Logo />
          </div>
          {/* navbar  */}
          <nav className='navbar items-start flex-col mt-3 border-b border-gray-700'>
            {sidebarNav.map(navItem => (
              <div key={navItem.id} className={`btn btn-ghost rounded-sm w-full justify-start ${navItem.containerClass}`}>
                <div className={`${navItem.id === 5 && "bg-gradient-to-tl from-purple-500 to-blue-500 p-1 rounded-sm me-1"}`}>
                  <navItem.icon className={`${navItem.id === 5 ? "w-5 h-5" : "w-7 h-7"}`} />
                </div>
                <Link
                  href={navItem.link}
                  className="normal-case">
                  {navItem.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* show all playlists  */}
          <ul className='p-4 flex flex-col justify-start items-start'>
            {playlists.map((playlist, ind) => (
              <li key={ind}
                className='normal-case p-2 py-1 rounded-sm w-full cursor-pointer hover:bg-zinc-900'>{playlist.playlistName}</li>
            ))}
          </ul>
        </div>

        <div className='w-full flex items-center gap-3 cursor-not-allowed btn justify-start normal-case ps-4'>
          <BsArrowDownCircle className="text-xl font-bold" />
          <span>Install App</span>
        </div>
      </div>
    </section>
  )
}
