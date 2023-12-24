"use client";

import React, { useEffect, useState } from 'react'
import MainPaddingX from '../general/main-padding-x'


const limitedTimeDealEndTime = process.env.LIMITED_DEAL_END_DATE || "2023-12-28T05:16:16.971Z";
const endDate = new Date(limitedTimeDealEndTime);


export default function TimeDeal() {

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    let interval = setInterval(() => {
      const currentTime = Date.now();
      const remainDay = Math.floor((endDate.getTime() - currentTime) / (1000 * 60 * 60 * 24));
      const remainHour = Math.floor((endDate.getTime() - currentTime) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const remainMinute = Math.floor((endDate.getTime() - currentTime) % (1000 * 60 * 60) / (1000 * 60));
      const remainSeconds = Math.floor((endDate.getTime() - currentTime) % (1000 * 60) / (1000));
      setRemainingTime(() => ({
        days: remainDay,
        hours: remainHour,
        minutes: remainMinute,
        seconds: remainSeconds,
      }))
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-black text-white ${endDate.getTime() - Date.now() > 0 ? "block" : "hidden"}`}>
      <MainPaddingX>
        <div className='py-3 flex flex-col lg:flex-row justify-between items-center flex-wrap gap-2'>
          <div className='text-lg'>
            <span>&diams;</span>
            <strong className='mx-3'><em>Limited time deal</em></strong>
            <span>&diams;</span>
          </div>

          <div className='flex gap-3 items-center'>
            <p>Subscribe now to Yearly plan and avail upto 25% discount!</p>
            <button type="button" className='bg-orange-400 text-black p-2 px-3 font-semibold rounded-md text-sm hover:-mt-1 transition-all duration-300 ease-linear whitespace-nowrap'>Avail now</button>
          </div>

          {/* remaining time left  */}
          <div className='flex items-start gap-1'>
            <div className="flex flex-col items-center">
              <span>
                {remainingTime.days < 10 ? "0" + remainingTime.days : remainingTime.days}
              </span>
              <span className='text-xs'>Days</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>
                {remainingTime.hours < 10 ? "0" + remainingTime.hours : remainingTime.hours}
              </span>
              <span className='text-xs'>Hours</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>
                {remainingTime.minutes < 10 ? "0" + remainingTime.minutes : remainingTime.minutes}
              </span>
              <span className='text-xs'>Minutes</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>
                {remainingTime.seconds < 10 ? "0" + remainingTime.seconds : remainingTime.seconds}
              </span>
              <span className='text-xs'>Seconds</span>
            </div>
          </div>
        </div>
      </MainPaddingX>
    </div>
  )
}
