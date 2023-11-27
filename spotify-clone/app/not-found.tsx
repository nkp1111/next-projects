import React from 'react'
import BackHomeBtn from '@/components/buttons/back-home-button'

export default function NotFound() {
  return (
    <div className='pt-14 text-center w-full'>
      <span className='text-error text-8xl font-bold font-mono'>404</span>
      <br />
      <h1 className='text-2xl font-bold'>Page Not Found</h1>
      <br />
      <BackHomeBtn />
    </div>
  )
}