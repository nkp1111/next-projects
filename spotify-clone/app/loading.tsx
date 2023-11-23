import React from 'react'

export default function Loading() {
  return (
    <div className='text-center flex flex-row justify-center place-items-center pt-5 flex-1 gap-2'>
      <span className='text-xl font-bold'>Loading </span>
      <span className="loading loading-dots loading-md"></span>
    </div>
  )
}