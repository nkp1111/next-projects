import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import SectionHeading from '../general/section-heading'
import { featureArticleData } from './feature-article-data'
import SectionArticle from './section-article'

export default function FeatureSection() {
  return (
    <section className='z-30 relative py-16'>
      <MainPaddingX>
        <div className='md:w-5/6 md:mx-auto'>
          <SectionHeading
            heading={"Whether you’re a startup or an established business, here’s why Dukaan is your best choice"}
          />
        </div>
        <div className='flex flex-col'>
          {featureArticleData.map(articleData => (
            <SectionArticle
              key={articleData.id}
              articleData={articleData} />
          ))}
        </div>
      </MainPaddingX>
    </section>
  )
}
