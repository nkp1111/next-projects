import React from 'react'
import { navData } from './nav-dropdown-data'
import Image from 'next/image';

export default function NavbarDropdownContent({ currentNavItem, setNavItemHover }: { currentNavItem: "Resources" | "Products" | "Company" | "", setNavItemHover: React.Dispatch<React.SetStateAction<boolean>> }) {
  if (!currentNavItem) {
    return null;
  }

  const currentNavData = navData[currentNavItem]
  return (
    <div className='flex flex-wrap gap-5'
      onMouseEnter={() => setNavItemHover(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setNavItemHover(false)
        }, 1000);
      }}
    >
      {currentNavData.map(data => (
        <a href="#" className="py-3 sm:py-4 max-w-80 cursor-pointer hover:bg-zinc-200 p-2 rounded-md"
          key={data.id}>
          <div className="flex items-start">
            <div className="flex-shrink-0 ">
              <Image
                src={data.image}
                alt={"."}
                width={60}
                height={60}
                className="w-10 h-10"
              />
            </div>
            <div className="flex-1 ms-4">
              <p className="font-medium">
                {data.name}
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-500">
                {data.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
