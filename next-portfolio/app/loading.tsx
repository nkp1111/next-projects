import React from 'react'

export default function Loading() {
  return (
    <div className='text-center flex justify-center pt-5'>
      <span>Loading </span>
      <span className="loading loading-dots loading-sm ms-2"></span>
    </div>
  )
}
