"use client";

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className='mt-16 text-center font-bold py-10'>
      <div className='text-3xl text-error'>Something went wrong
        <span className="text-3xl text-error animate-ping"> .</span>
        <span className="animate-ping text-3xl text-error">.</span>
        <span className="animate-ping text-3xl text-error">.</span>
      </div>

      <button
        className='btn mt-10 btn-primary px-10'
        type="button"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}


