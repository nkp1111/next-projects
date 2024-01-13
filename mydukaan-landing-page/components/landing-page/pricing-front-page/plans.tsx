"use client";

import React, { useState } from 'react';
import { planData } from './plans-data';
import PlanArticle from './plan-article';

export default function Plans() {
  const [planDuration, setPlanDuration] = useState<"monthly" | "yearly">("monthly");
  return (
    <div className='flex flex-col'>
      <div className='my-10 flex justify-center'>
        <div className='border border-gray-400 shadow-sm rounded-full p-1 flex flex-wrap justify-normal items-center'>
          <span
            className={`rounded-full font-semibold px-5 py-3 inline-block text-lg text-center transition-all duration-300 ease-in-out cursor-pointer mx-auto ${planDuration === "monthly" ? "bg-sky-600 text-white" : "text-stone-950 bg-white"}`}
            onClick={() => setPlanDuration("monthly")}>
            Monthly
          </span>
          <span
            className={`rounded-full font-semibold px-5 py-3 inline-block text-lg text-center transition-all duration-300 ease-in-out cursor-pointer mx-auto ${planDuration === "yearly" ? "bg-sky-600 text-white" : "text-stone-950 bg-white"}`}
            onClick={() => setPlanDuration("yearly")}>
            Yearly <small className='uppercase font-medium text-xs text-start'>(extra off)</small>
          </span>
        </div>
      </div>

      <div className='flex flex-row flex-wrap gap-5 justify-between items-start mt-10 mx-auto'>
        {planData.map(data => (
          <PlanArticle
            key={data.id}
            articleData={data}
            duration={planDuration}
          />
        ))}
      </div>
    </div>
  )
}
