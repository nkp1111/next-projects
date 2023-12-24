import React, { useEffect } from 'react'
import MainPaddingX from '../general/main-padding-x'


export default function TimeDeal() {
  const limitedTimeDealEndTime = process.env.LIMITED_DEAL_END_DATE as string;
  const currentDate = Date.now();
  const endDate = new Date(limitedTimeDealEndTime);
  const remainingTime = endDate.getTime() - currentDate;
  return (
    <div className={`bg-black text-white ${remainingTime > 0 ? "block" : "hidden"}`}>
      <MainPaddingX>
        <div className='py-3 flex justify-between items-center'>
          <div className='text-xl'>
            <span>&diams;</span>
            <strong className='mx-3'><em>Limited time deal</em></strong>
            <span>&diams;</span>
          </div>

          <div className='flex gap-2 items-center'>
            <p>Subscribe now to Yearly plan and avail upto 25% discount!</p>
            <button type="button" className='bg-orange-400 text-black px-2 py-1 rounded-sm text-sm'>Avail now</button>
          </div>

          {/* remaining time left  */}
          <div className='flex items-start gap-2 text-sm'>
            <div className="flex flex-col items-center">
              <span>
                {endDate.getDay() - new Date().getDay()}
              </span><span>Days</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>
                {endDate.getHours() - new Date().getHours()}
              </span><span>Hours</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>
                {endDate.getMinutes() - new Date().getMinutes()}
              </span><span>Minutes</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>
                {endDate.getSeconds() - new Date().getSeconds()}
              </span><span>Seconds</span>
            </div>
          </div>
        </div>
      </MainPaddingX>
    </div>
  )
}
