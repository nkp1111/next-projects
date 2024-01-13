import React from 'react'
import { planComparisonData } from './planComparisonData';
import ComparisonHeading from './comparison-heading';

export default function ComparePlanSection({ planDuration }: { planDuration: "monthly" | "yearly" }) {
  return (
    <section className='z-30 relative py-16 bg-white'>
      <h2 className='font-medium xl:text-4xl sm:text-3xl text-2xl'>
        Compare plans and features
      </h2>
      <div className='md:my-10 my-8'>
        <div className="flex flex-col">
          {/* heading  */}
          <ComparisonHeading {...{ planDuration }} />

          <>
            {Object.keys(planComparisonData).map(keys => (
              <div className="flex" key={keys}>
                {planComparisonData[keys as keyof typeof planComparisonData].head}
              </div>
            ))}
          </>
        </div>
      </div>
    </section>
  )
}
