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
            {Object.keys(planComparisonData).map(key => (
              <article className="flex flex-col" key={key}>
                <h3 className='text-3xl font-medium mt-6 mb-3'>{planComparisonData[key as keyof typeof planComparisonData].head}</h3>
                <div>
                  {planComparisonData[key as keyof typeof planComparisonData].data.map((data, index) => {
                    return (
                      <div key={index} className='md:mb-5 mb-6 flex md:flex-row flex-col gap-3'>
                        <div className='md:w-[40%] w-full'>
                          <h4 className='font-medium text-lg'>{data.head}</h4>
                          <p className='text-gray-800 text-sm'>{data.text}</p>
                        </div>

                        <div className='flex flex-1 justify-between items-center'>
                          {[data.free, data.starter, data.growth, data.infinity].map((planVal, index) => (
                            <div key={index} className='text-center flex-1 text-indigo-900'
                              aria-label={index === 0 ? "free-plan" : index === 1 ? "starter-plan" : index === 2 ? "growth-plan" : "infinity-plan"}>
                              {planVal === "_"
                                ? <span className='font-bold text-3xl' aria-label='not available'>-</span>
                                : planVal === "O"
                                  ? <span aria-label='available'>✔</span>
                                  : <span className='text-lg font-medium text-black' aria-label={planVal}>{planVal}</span>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            ))}
          </>
        </div>
      </div>
    </section>
  )
}
