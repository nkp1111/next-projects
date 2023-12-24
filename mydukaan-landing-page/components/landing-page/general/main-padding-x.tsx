import React from 'react'

export default function MainPaddingX(
  { children }
    : { children: React.ReactNode }
) {
  return (
    <div className='px-10 md:px-48'>
      {children}
    </div>
  )
}
