import React from 'react'
import MainPaddingX from '../general/main-padding-x';
import SectionHeading from '../general/section-heading';
import ToolSectionArticle from './tool-section-article';
import { toolArticleData } from './tool-article-data';

export default function ToolsSection() {
  const background = "#fab73b1a";
  return (
    <section className={`z-30 relative py-16`} style={{ background }}>
      <MainPaddingX>
        <div className='md:w-5/6 md:mx-auto text-center'>
          <SectionHeading
            heading={"E-commerce Simplified, Success Amplified"}
          />
          <p className='text-lg text-gray-600 mt-5 mb-12'>Empowering your online business growth with all the essential tools.</p>
        </div>
        <div className='flex flex-row gap-8 flex-wrap'>
          {toolArticleData.map(articleData => (
            <ToolSectionArticle
              key={articleData.id}
              articleData={articleData} />
          ))}
        </div>
      </MainPaddingX>
    </section>
  )
}
