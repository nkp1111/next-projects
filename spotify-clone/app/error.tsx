"use client";

import React from 'react'
import BackHomeBtn from '@/components/buttons/back-home-button';

export default function Error() {
  return (
    <div className='pt-14 text-center flex-1 w-full'>
      <h1 className='text-error text-2xl font-bold'>Something went wrong.</h1>
      <br />
      <BackHomeBtn />
    </div>
  )
}
