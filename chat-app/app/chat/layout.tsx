import Header from '@/components/chat/header'
import React from 'react'

export default function ChatLayout(
  { children }:
    { children: React.ReactNode }
) {
  return (
    <div className='vh-100 p-0 d-flex flex-column'>
      <Header />
      {children}
    </div>
  )
}
