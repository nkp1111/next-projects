import React from 'react'
import { planData } from '../pricing-front-page/plans-data';
import { formatNumber } from '../pricing-front-page/plan-article';

export default function ComparisonHeading({ planDuration }: { planDuration: "monthly" | "yearly" }) {
  return (
    <div className="flex">
      <div className='md:w-[40%] md:block hidden'></div>

      <div className='flex flex-1 justify-between items-center'>
        {planData.map(plan => {
          const planPrice = plan.pricing[planDuration];
          return <div key={plan.id} className="flex flex-col justify-center items-center">
            <h3 className='font-medium text-xl'>{plan.title}</h3>
            <div className=' text-gray-700'>
              <span>₹</span>
              <span className='transition-all duration-300 ease-linear'>{formatNumber(planPrice)}</span>
              <span className={`${planPrice ? "inline transition-all duration-300 ease-linear" : "hidden"}`}>/{planDuration === "monthly" ? "month" : "year"}</span>
            </div>
            <div className='my-2'>
              <button type="button"
                className={`w-full border md:py-3 md:px-4 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ease-linear font-medium text-lg ${plan.most_popular ? "bg-sky-700 border-gray-50 hover:bg-sky-800 text-white" : "bg-white hover:bg-sky-100 border-sky-700 text-sky-700"}`}
              >Get started</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
