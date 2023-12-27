import React from 'react'

export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <h2 className='font-bold xl:text-4xl sm:text-3xl text-2xl text-center'>
      {heading}
    </h2>
  )
}
