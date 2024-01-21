import React from 'react'
import DisplayHeader from './header'
import AudioList from './audioList'

export default function Display() {
  return (
    <section className='bg-zinc-900 text-white flex-1 h-full px-8 py-2 overflow-y-auto md:block hidden'>
      <h2 className="text-center w-full invisible -top-96">Audio List Display</h2>
      <DisplayHeader />
      <div className='mt-4 h-full'>
        <AudioList />
      </div>
    </section>
  )
}
