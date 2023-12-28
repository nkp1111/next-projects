import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import SectionHeading from '../general/section-heading'
import ThemeSectionArticle from './theme-section-article'
import { themeArticleData } from './theme-article-data'

export default function ThemeSection() {
  return (
    <section className={`z-30 relative py-20`}>
      <MainPaddingX>
        <div className='md:w-5/6 md:mx-auto'>
          <SectionHeading
            heading={"Kickstart your online store with these themes"}
          />
        </div>
        <div className='flex flex-row gap-8 flex-wrap my-16'>
          {themeArticleData.map(articleData => (
            <ThemeSectionArticle
              key={articleData.id}
              articleData={articleData} />
          ))}
        </div>

        <div className="flex justify-center relative">
          <button type="button" className='btn-white border border-black rounded-sm px-6 py-3 text-lg mx-auto hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear'>View All</button>
        </div>
      </MainPaddingX>
    </section>
  )
}
