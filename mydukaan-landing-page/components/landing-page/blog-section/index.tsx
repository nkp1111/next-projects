import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import SectionHeading from '../general/section-heading'
import { blogArticleData } from './blog-section-data'
import BlogSectionArticle from './blog-section-article'

export default function BlogSection() {
  const background = "rgb(250,250,250)"
  return (
    <section className={`z-30 relative py-20`} style={{ background }}>
      <MainPaddingX>
        <div className='md:w-5/6 md:mx-auto'>
          <div className="flex flex-col-reverse">
            <SectionHeading
              heading={"Learn the tips and tricks from experts."}
            />
            <h3 className='font-bold xl:text-4xl sm:text-3xl text-2xl text-center'>Grow your online store. </h3>
          </div>

          <div className='flex my-10 gap-10 flex-wrap justify-center'>
            {blogArticleData.map(articleData => (
              <BlogSectionArticle
                key={articleData.id}
                articleData={articleData} />
            ))}
          </div>

          <div className="flex justify-center relative">
            <button type="button" className='btn-white border border-black rounded-sm px-6 py-3 text-lg mx-auto hover:-mt-1 hover:mb-1 transition-all duration-300 ease-linear'>View all</button>
          </div>
        </div>
      </MainPaddingX>
    </section>
  )
}
