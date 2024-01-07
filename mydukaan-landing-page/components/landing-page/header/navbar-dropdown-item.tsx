import React from 'react'
import { navData } from './nav-dropdown-data'
import Image from 'next/image';

export default function NavbarDropdownContent({ currentNavItem, setNavItemHover, smallWidth = false }: {
  currentNavItem: "Resources" | "Products" | "Company" | "",
  setNavItemHover: React.Dispatch<React.SetStateAction<boolean>>,
  smallWidth?: boolean
}) {
  if (!currentNavItem) {
    return null;
  }

  const currentNavData = navData[currentNavItem]

  if (smallWidth) {
    return <SmallWidthArticles currentNavData={currentNavData} />
  }

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
        <a href={data.link || "#"} className="py-3 sm:py-4 max-w-80 cursor-pointer hover:bg-zinc-200 px-3 rounded-md"
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


// article for small size screen
export function SmallWidthArticles({ currentNavData }: {
  currentNavData: {
    id: number;
    name: string;
    image: any;
    description: string;
    link: string;
  }[]
}) {
  return (
    <ul className='w-full'>
      {currentNavData.map(data => (
        <li key={data.id} className="py-2 ps-5 cursor-pointer hover:bg-zinc-200 w-full">
          <a href={data.link}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={data.image}
                  alt={"."}
                  width={60}
                  height={60}
                  className="w-6 h-6 rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium">
                  {data.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
