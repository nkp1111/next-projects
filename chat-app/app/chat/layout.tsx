import Header from '@/components/chat/header'
import React from 'react'

export default function ChatLayout(
  { children }:
    { children: React.ReactNode }
) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
