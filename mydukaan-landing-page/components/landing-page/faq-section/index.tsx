import React from 'react'
import MainPaddingX from '../general/main-padding-x'
import { faqData } from './faq-data';
import FaqAccordion from './faq-accordion';

export default function FAQSection() {
  const background = "rgb(250, 250, 250)";
  return (
    <section className='z-30 relative py-16' style={{ background }}>
      <MainPaddingX>
        <div className='mb-6'>
          <h2 className='font-bold xl:text-4xl sm:text-3xl text-2xl'>FAQs</h2>
        </div>
        <ul className='flex flex-col'>
          {faqData.map(faq => (
            <FaqAccordion faq={faq} key={faq.id} />
          ))}
        </ul>
      </MainPaddingX>
    </section>
  )
}
