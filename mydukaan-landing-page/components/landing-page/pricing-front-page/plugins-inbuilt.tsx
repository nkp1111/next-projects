"use client";

import React, { useState } from 'react'
import { planData } from './plans-data'
import Image from 'next/image'


const allPlugins = planData[0].plugins;
const lessAmount = 7;
const lessPlugins = allPlugins.slice(0, lessAmount);


export default function PluginsBuiltIn() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className='z-30 relative py-16 bg-white'>
      <div className='bg-sky-100 rounded-md p-12 relative overflow-hidden'>
        <h2 className={`font-medium md:text-2xl text-xl`}>
          Dukaan In-built Plugins!
        </h2>
        <p className='text-lg text-gray-700'>Dukaan&apos;s built-in plugins are included in the plans, providing everything that your business needs.</p>
        <div className='flex gap-8 w-full flex-wrap items-center mt-8'>
          <PluginsList showAll={showAll} />

          <span className='underline text-sm text-gray-600 cursor-pointer'
            onClick={() => setShowAll(pre => !pre)}>
            {showAll ? "See less" : `+View ${allPlugins.length - lessAmount} more`}
          </span>
        </div>

        <div className='absolute -bottom-[30px] -right-[20px] rounded-full w-40 h-40 bg-sky-200 -z-0'> </div>
      </div>
    </section>
  )
}



export function PluginsList({ showAll = false }: { showAll?: boolean }) {
  const pluginsToShow = showAll ? allPlugins : lessPlugins;

  return (
    <>
      {pluginsToShow.map(plugin => (
        <div key={plugin.id} className='bg-red-300 rounded-md'>
          <Image
            src={plugin.image}
            width={60}
            height={60}
            alt={plugin.title || "."}
          />
        </div>
      ))}
    </>
  )
}
