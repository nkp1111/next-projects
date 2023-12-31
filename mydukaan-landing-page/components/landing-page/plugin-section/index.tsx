import React from 'react'
import MainPaddingX from '../general/main-padding-x';
import SectionHeading from '../general/section-heading';
import PluginSectionArticle from './plugin-section-article';
import { pluginArticleData } from './plugin-article-data';

export default function PluginSection() {
  const background = "#fab73b1a";
  return (
    <section className={`z-30 relative py-16`} style={{ background }}>
      <div className='md:w-3/4 md:mx-auto text-center'>
        <SectionHeading
          heading={"Enhance your site's functionality with plugins"}
        />
        <p className='md:text-xl text-lg text-gray-600 mt-5 mb-12 md:w-11/12 md:mx-auto'>Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. There&apos;s a plugin for everything.</p>
      </div>
      <div className='hidden -mt-1 -mt-2 -mt-3 -mt-5 -mt-6 -mt-12 -mt-20 -mt-16 -mt-24'></div>
      <div className='flex flex-row gap-8 mt-32 relative md:flex-nowrap flex-wrap'>
        {pluginArticleData.map(articleData => (
          <PluginSectionArticle
            key={articleData.id}
            articleData={articleData} />
        ))}
      </div>

      <div className="flex justify-center relative mt-10">
        <button type="button" className='btn-white border border-black rounded-sm px-6 py-3 text-lg mx-auto hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear'>Take a look</button>
      </div>
    </section>
  )
}
