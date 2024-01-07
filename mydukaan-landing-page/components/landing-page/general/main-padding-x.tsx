import React from 'react'

export default function MainPaddingX(
  { children }
    : { children: React.ReactNode }
) {
  return (
    <div className='px-5 sm:px-10 md:px-24 xl:px-40 2xl:px-48 w-full'>
      {children}
    </div>
  )
}
