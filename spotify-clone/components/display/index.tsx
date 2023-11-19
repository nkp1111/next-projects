import React from 'react'
import DisplayHeader from './header'

export default function Display() {
  return (
    <section className='bg-zinc-900 text-white flex-1 px-8 py-2'>
      <h2 className="text-center w-full invisible -top-96">Audio List Display</h2>
      <DisplayHeader />
    </section>
  )
}
