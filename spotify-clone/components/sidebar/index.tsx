import React from 'react'
import Logo from '../general/logo'
import { BsArrowDownCircle } from "react-icons/bs";
import SidebarNavItem from './navItem';
import PlaylistList from './playlistList';

export default async function Sidebar() {

  return (
    <section className="w-72 bg-black h-full relative flex flex-col overflow-y-auto">
      {/* hidden heading  */}
      <h2 className="absolute text-center w-full invisible -top-96">Sidebar Navigation</h2>
      <div className='flex flex-col w-full overflow-hidden h-full'>
        <div className='flex-1 p-2 overflow-y-auto h-full'>
          <div className='p-4'>
            <Logo />
          </div>
          {/* navbar  */}
          <SidebarNavItem />

          <div className="overflow-hidden">
            {/* show all user playlists and liked songs array */}
            {/* <PlaylistList /> */}
          </div>
        </div>

        <div className='w-full flex items-center gap-3 cursor-not-allowed btn justify-start normal-case ps-4 mt-auto'>
          <BsArrowDownCircle className="text-xl font-bold" />
          <span>Install App</span>
        </div>
      </div>
    </section>
  )
}
